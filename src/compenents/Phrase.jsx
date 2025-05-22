export default function Phrase({ src }) {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold whitespace-nowrap">
        Front End Developer
      </p>
      <span className="relative h-16 w-32 md:h-20 md:w-40 lg:h-24 lg:w-48 xl:h-32 xl:w-64 rounded-full overflow-hidden flex-shrink-0">
        <img src={src} alt="image" className="w-full h-full object-cover" />
      </span>
    </div>
  );
}
