import { useState } from "react";

export function ExpandBtn({ children }) {
  const [isClosed, setisClosed] = useState(true);

  return (
    <>
      <div
        className={`duration-500 mx-6 sm:mx-10 ${isClosed ? "max-h-0 overflow-hidden opacity-0" : "max-h-96 opacity-100"}`}
      >
        {children}
      </div>
      <button
        onClick={() => setisClosed(!isClosed)}
        className="expand-btn"
      >
        <span className="expand-btn-line" />
        <span className={`expand-btn-line ${isClosed && "rotate-90"}`} />
      </button>
    </>
  );
}
