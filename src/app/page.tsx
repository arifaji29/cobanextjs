import Image from "next/image";
import {Navbar} from '@/app/components/Navbar'; 

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Sisa section landing page akan ada di sini */}
      <h1 className="mt-20">Selamat Datang!</h1> {/* mt-20 untuk memberi jarak dari navbar fixed */}
    </main>
  )
}
