import { useEffect, useState } from "react";
import { MenuButton } from "@/components";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const linkStyles =
    "transition-colors duration-300 " +
    `${scrollPosition >= 500 ? "hover:text-[--fontb]" : "hover:text-[--fonta]"}`;

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
        "w-screen p-2 transition-colors duration-500 fixed z-50 " +
        `${scrollPosition >= 500 ? "bga text-[--fonta] backdrop-blur-sm" : "bgb text-[--fontb]"}`
      }
    >
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav
        className={
          "transition-all duration-300 overflow-hidden sm:max-h-fit sm:w-full sm:overflow-visible " +
          `${isOpen ? "max-h-[128rem]" : "max-h-0"}`
        }
      >
        <ul className="p-3 static sm:flex sm:flex-row sm:justify-around sm:items-center">
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
