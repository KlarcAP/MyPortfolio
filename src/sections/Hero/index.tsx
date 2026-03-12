import foto from "../../assets/minha-foto.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${foto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 w-full justify-between px-10 md:px-20">
        <h1 className="text-white text-4xl md:text-9xl font-bold">
          Klarc
        </h1>

        <h1 className="text-white text-4xl md:text-9xl font-bold">
          Almeida
        </h1>
      </div>
    </section>
  );
}