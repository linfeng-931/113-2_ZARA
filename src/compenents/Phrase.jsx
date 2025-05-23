export default function Phrase({ src }) {
  return (
    <div className="px-5 flex gap-5 items-center">
      <div className="text-3xl  lg:text-6xl font-bold whitespace-nowrap">
        DOTS.COLLECTION
      </div>
      <span className="relative h-16 w-32 md:h-20 md:w-40 lg:h-24 lg:w-48 xl:h-24 xl:w-48 rounded-full overflow-hidden flex-shrink-0">
        <img src={src} alt="image" className="w-full h-full object-contain" />
      </span>
    </div>
  );
}
