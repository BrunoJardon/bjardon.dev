import { useWindowDimensions } from "@/hooks";
import { useEffect, useState } from "react";
import { MenuButton } from "@/components";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { height } = useWindowDimensions();
  const [scrollPosition, setScrollPosition] = useState(0);
  const linkStyles =
    "transition-colors duration-300 " +
    `${scrollPosition >= height*0.93 ? "hover:text-[--fontb]" : "hover:text-[--fonta]"}`;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        "w-screen p-2 transition-colors duration-500 fixed z-50 shadow " +
        `${scrollPosition >= height*0.93 ? "bga text-[--fonta] backdrop-blur-sm" : "bgb text-[--fontb]"}`
      }
    >
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav
        className={
          "transition-all duration-300 overflow-hidden md:max-h-fit md:w-full md:overflow-visible " +
          `${isOpen ? "max-h-[128rem]" : "max-h-0"}`
        }
      >
        <ul className="p-3 static md:flex md:flex-row md:justify-around md:items-center lg:justify-evenly">
          <li>
            <a className={linkStyles} href="#start">
              # Inicio
            </a>
          </li>
          <li>
            <a className={linkStyles} href="#projects">
              # Proyectos
            </a>
          </li>
          <li>
            <a className={linkStyles} href="#experiences">
              # Experiencias
            </a>
          </li>
          <li>
            <a className={linkStyles} href="#education">
              # Estudios
            </a>
          </li>
          <li>
            <a className={linkStyles} href="#skills">
              # Habilidades
            </a>
          </li>
          <li>
            <a className={linkStyles} href="#about">
              # Sobre mi
            </a>
          </li>
          <li>
            <a className={linkStyles} href="#contact">
              # Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
