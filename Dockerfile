# ===============================================
# Imagen base: PHP 8.3 CLI
# ===============================================
FROM php:8.3-cli

# -----------------------------------------------
# Instalar dependencias del sistema y extensiones PHP necesarias
# -----------------------------------------------
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    curl \
    libzip-dev \
    libonig-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libxml2-dev \
    libpq-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql pgsql zip mbstring xml gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# -----------------------------------------------
# Instalar Node.js 18 LTS (más estable) y npm
# -----------------------------------------------
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

# -----------------------------------------------
# Instalar Composer globalmente
# -----------------------------------------------
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# -----------------------------------------------
# Establecer directorio de trabajo
# -----------------------------------------------
WORKDIR /var/www/html

# ===============================================
# Optimización cache Composer
# Copiamos solo composer.json y composer.lock primero
# ===============================================
COPY composer.json composer.lock ./

# Instalar dependencias PHP sin ejecutar scripts aún
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist --no-scripts

# ===============================================
# Copiar el resto del código
# ===============================================
COPY . .

# Ejecutar los scripts de Laravel ahora que artisan existe
RUN composer dump-autoload --optimize
RUN php artisan package:discover --ansi

# ===============================================
# Instalar dependencias Node.js si existe frontend
# ===============================================
RUN if [ -f package.json ]; then npm ci; fi
RUN if [ -f package.json ]; then npm run build; fi

# ===============================================
# Ajustar permisos de storage y bootstrap/cache
# ===============================================
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# ===============================================
# Exponer puerto (Laravel normalmente corre en 8000)
# ===============================================
EXPOSE 8080

# ===============================================
# Comando para iniciar servidor PHP embebido
# ===============================================
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-8080} -t public"]
