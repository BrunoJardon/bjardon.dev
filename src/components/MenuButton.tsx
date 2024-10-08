interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MenuButton: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const genericStyles =
    "block bg-[--fontb] transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ";
  return (
      <button
      id="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center p-2 bg-[--bga] rounded-md transition-transform duration-300 hover:scale-110"
      >
        <span className={genericStyles + `${isOpen && "rotate-45 translate-y-2"}`}></span>
        <span className={genericStyles + "my-1.5 " + `${isOpen && "opacity-0"}`}></span>
        <span className={genericStyles + `${isOpen && "-rotate-45 -translate-y-2"}`}></span>
      </button>
  );
};

export default MenuButton;
