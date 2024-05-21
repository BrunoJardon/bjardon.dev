import { useState, type ReactNode } from "react";
import ExpandButton from "./ExpandButton.tsx";

interface Props {
  preview: string;
  title: string;
  repo: string;
  children: ReactNode;
}

const ProjectAccordion: React.FC<Props> = ({
  preview,
  title,
  repo,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bga rounded-lg flex flex-col justify-around items-center pb-2 my-4 w-full sm:w-[45%] sm:m-0 sm:p-0 shadow">
      <img
        className="rounded-t-md w-full"
        src={preview}
        alt={title + " preview"}
      />
      <h3 className="group transition-all text-[--fonta] duration-500 text-xl my-4">
        {title}
      </h3>
      <div
        className={
          "overflow-hidden transition-all duration-500 px-4 pb-0 text-[--fonta] " +
          `${isOpen ? "max-h-[128rem]" : "max-h-0"}`
        }
      >
        {children}
        <a
          className="flex flex-row justify-center items-center bgb rounded-md w-fit text-[--fontb] px-2 py-1 hover:scale-110 active:scale-95 transition-transform duration-300 text-sm my-2"
          href={repo}
          target="_blank"
        >
          Código
          <img
            className="w-6 ml-2"
            src="/assets/imgs/socials/github.svg"
            alt="GitHub"
          />
        </a>
      </div>
      <ExpandButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ProjectAccordion;
