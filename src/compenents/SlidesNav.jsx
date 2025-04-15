export default function SlidesNav({ onNext, onPrev, isSliding }) {
  return (
    <nav
      className={`fixed right-[-2rem] md:right-0.5 bottom-1/2 -translate-y-1/2 rotate-90 z-30 bg-none text-xl ${
        isSliding ? "pointer-events-none" : ""
      }`}
    >
      <button
        onClick={onPrev}
        className="font-mono text-black  hover:opacity-75 mx-2 cursor-pointer mr-8 hover:line-through"
      >
        Prev
      </button>
      <button
        onClick={onNext}
        className="font-mono text-black  hover:opacity-75 mx-2 cursor-pointer hover:line-through"
      >
        Next
      </button>
    </nav>
  );
}
