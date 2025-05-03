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
          className={`duration-500 ${isClosed ? "expand-btn-closed" : "expand-btn-opened"}`}
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
          ` duration-500 ${isClosed ? "expand-btn-closed" : "expand-btn-opened"}`
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
