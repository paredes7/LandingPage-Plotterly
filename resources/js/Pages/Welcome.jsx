import Layout from '@/Layouts/MainLayout';
import Banner from '@/Components/welcome/WelcomeSe/Banner';
import Offers from '@/Components/welcome/Offers/Offers';
import CallToAction from '@/Components/welcome/Information/CallToAction';

export default function Welcome({ categories, search, page, hasMore }) {
  
  return (
    <Layout title="Plotterly - Inicio" > 
      
      <Banner />
      <Offers/>
      <CallToAction />
      
    </Layout>
  );
}
