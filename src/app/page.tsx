import Image from 'next/image';
import {Navbar} from '@/app/components/Navbar'; 
import { HeroSection } from '@/app/components/HeroSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* <FeaturesSection /> */}
      {/* <Footer /> */}
    </main>
  )
}
