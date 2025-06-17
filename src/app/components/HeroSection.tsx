export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Solusi Terbaik untuk Bisnis Anda
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Tingkatkan produktivitas dan efisiensi dengan platform canggih kami yang mudah digunakan.
        </p>
        <button className="bg-blue-500 text-white font-bold px-8 py-3 rounded-md text-lg hover:bg-blue-600 transition duration-300">
          Mulai Sekarang Gratis
        </button>
      </div>
    </section>
  );
}