export default function Slide({ title, bg, active }) {
  return (
    <section
      className={`absolute inset-0 transition-opacity duration-700 ${
        active ? "z-20 opacity-100" : "z-0 opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${bg})` }}
      />
    </section>
  );
}
