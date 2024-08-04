interface Props{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ExpandButton({isOpen, setIsOpen}:Props) {
  
  const genericStyles =
    "block bg-[--fonta] transition-all duration-300 ease-out h-1 w-6 rounded-sm absolute";
  return (
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={"flex justify-center items-center p-2 mb-2 rounded-full transition-transform duration-300 hover:scale-110 w-8 h-8 " + `${!isOpen && "animate-pulse"}`}
      >
        <span className={genericStyles + `${!isOpen && " rotate-90"}`}></span>
        <span className={genericStyles}></span>
      </button>
  );
}
