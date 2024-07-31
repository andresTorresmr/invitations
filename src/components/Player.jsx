import { useRef, useState } from "preact/hooks";

const Play = () => (
  <svg
    class=" text-white w-10 md:w-12 h-10 md:h-12  flex items-center justify-center"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 25"
  >
    <path
      fill-rule="evenodd"
      d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
      clip-rule="evenodd"
    />
  </svg>
);

const Pause = () => (
  <svg
    class="text-white w-10 md:w-12 h-10 md:h-12 flex items-center justify-center"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fill-rule="evenodd"
      d="M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"
      clip-rule="evenodd"
    />
  </svg>
);

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.2;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={
          "bg-[#858F5D] z-50 fixed bottom-8 right-8  w-[50px] md:w-[70px] h-[50px] md:h-[70px] text-white rounded-full  flex items-center justify-center overflow-hidden"
        }
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <audio ref={audioRef} src={"music/Y_SI_SOMOS_NOVIOS.mp3"} loop={true} />
    </>
  );
}
