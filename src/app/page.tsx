import Navbar         from '@/components/Navbar';
import Hero           from '@/components/Hero';
import BrandStory     from '@/components/BrandStory';
import Products       from '@/components/Products';
import HealthBenefits from '@/components/HealthBenefits';
import KashmirRoots   from '@/components/KashmirRoots';
import CraftProcess   from '@/components/CraftProcess';
import Contact        from '@/components/Contact';
import Footer         from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandStory />
      <Products />
      <HealthBenefits />
      <KashmirRoots />
      <CraftProcess />
      <Contact />
      <Footer />
    </main>
  );
}
