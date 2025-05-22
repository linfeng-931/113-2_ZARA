import Slide from "./Slide";

export default function Description() {
  return (
    <div className="bg-amber-500 overflow-hidden">
      <div className="h-[40vh]" />
      <div className="flex flex-col gap-42">
        <Slide src="image/Zara_Logo.svg 1.png" left="-20%" direction={1} />
        <Slide src="image/Zara_Logo.svg 1.png" left="25%" direction={-1} />
        <Slide src="image/Zara_Logo.svg 1.png" left="-25%" direction={1} />
      </div>

      <div className="h-[40vh]" />
    </div>
  );
}
