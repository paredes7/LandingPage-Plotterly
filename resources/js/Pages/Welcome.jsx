import Layout from '@/Layouts/MainLayout';
import Banner from '@/Components/welcome/WelcomeSe/Banner';
import WelcomeSection from '@/Components/welcome/WelcomeSe/WelcomeSection';
import CategoriesGrid from '@/Components/welcome/WelcomeSe/CategoriesGrid';
import CTAContact from '@/Components/welcome/WelcomeSe/CTAContact';
import Service from '@/Components/welcome/Servicios/Service';
import Marcas from '@/Components/welcome/Marcas/Marcas';
export default function Welcome({ categories, search, page, hasMore }) {
  
  return (
    <Layout title="Pragati Motors | Bolivia">
      
      <Banner />
      <Service/>
      <Marcas />
    </Layout>
  );
}
