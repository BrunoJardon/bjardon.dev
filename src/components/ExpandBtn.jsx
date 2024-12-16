import { useState } from "react";

export function ExpandBtn({
  children,
  styles = "",
  margin = "",
  dynamicBg = false,
}) {
  const [isClosed, setIsClosed] = useState(true);

  if (dynamicBg) {
    return (
      <div
        className={
          styles +
          ` duration-500 ${isClosed ? " bg-opacity-0 bg-none" : " bg-opacity-100 bg-background-a sm:bg-transparent"}`
        }
      >
        <div
          className={`duration-500 ${isClosed ? "max-h-0 overflow-hidden opacity-0" : "max-h-[512px] opacity-100"}`}
        >
          {children}
        </div>
        <button
          onClick={() => setIsClosed(!isClosed)}
          className={"expand-btn " + margin}
        >
          <span className="expand-btn-line" />
          <span className={`expand-btn-line ${isClosed && "rotate-90"}`} />
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        className={
          styles +
          ` duration-500 ${isClosed ? "max-h-0 overflow-hidden opacity-0" : "max-h-[512px] opacity-100"}`
        }
      >
        {children}
      </div>
      <button
        onClick={() => setIsClosed(!isClosed)}
        className={"expand-btn " + margin}
      >
        <span className="expand-btn-line" />
        <span className={`expand-btn-line ${isClosed && "rotate-90"}`} />
      </button>
    </>
  );
}
