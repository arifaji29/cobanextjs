import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          LogoSaya
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#fitur" className="text-gray-600 hover:text-blue-500">Fitur</Link>
          <Link href="#harga" className="text-gray-600 hover:text-blue-500">Harga</Link>
          <Link href="#kontak" className="text-gray-600 hover:text-blue-500">Kontak</Link>
        </div>
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Daftar
        </button>
        {/* Tombol untuk menu mobile bisa ditambahkan di sini nanti */}
      </div>
    </nav>
  );
};