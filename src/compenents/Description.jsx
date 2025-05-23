import Slide from "./Slide";

export default function Description() {
  return (
    <div className="overflow-hidden">
      <div className="h-[40vh]" />
      <div className="flex flex-col gap-42">
        <Slide
          src="image/zara_logo_black.png"
          className="w-[200px] h-[100px]"
          left="-20%"
          direction={1}
        />
        <Slide
          src="image/zara_logo_black.png"
          className="w-[200px] h-[100px]"
          left="25%"
          direction={-1}
        />
        <Slide
          src="image/zara_logo_black.png"
          className="w-[200px] h-[100px]"
          left="-25%"
          direction={1}
        />
      </div>

      <div className="h-[40vh]" />
    </div>
  );
}
