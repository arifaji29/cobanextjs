import Image from 'next/image';
import {Navbar} from '@/app/components/Navbar'; 
import { HeroSection } from '@/app/components/HeroSection';



export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Image
  src="/mylogo.png" // Path dimulai dari folder public
  alt="Deskripsi gambar"
  width={500}
  height={300}
  className="rounded-lg"
/>
      {/* <FeaturesSection /> */}
      {/* <Footer /> */}
    </main>
  )
}
