import React, { useCallback, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

const Dropdown = ({
  renderHeader,
  renderBody,
  value,
  activeHead,
  onClick,
  style = { header: "", text: "" },
}) => {
  const toggleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleDecection = (e) => {
      if (toggleRef.current.contains(e.target)) {
        contentRef.current.classList.toggle("active");
        contentRef.current.classList.toggle("pointer-events-none");
      } else {
        if (!contentRef.current.contains(e.target)) {
          contentRef.current.classList.remove("active");
          contentRef.current.classList.add("pointer-events-none");
        }
      }
    };
    if (toggleRef && contentRef) {
      document.addEventListener("click", handleDecection);
    }

    return () => document.removeEventListener("click", handleDecection);
  }, [toggleRef, contentRef]);

  return (
    <div ref={toggleRef} className="dropdownCustom">
      {renderHeader ? (
        renderHeader()
      ) : (
        <div
          className={`flex items-center cursor-pointer w-auto ${style.header}`}
          onClick={onClick}
        >
          <p className={`${style.text} ${activeHead ? "!text-primary" : ""}`}>
            {value}
          </p>
          <FaAngleDown className="ml-2" />
        </div>
      )}
      <div
        ref={contentRef}
        className={`z-[999999] rounded-md absolute default-transition  opacity-0 left-0 right-0 bg-white top-[120%] shadow-lg pointer-events-none`}
      >
        {renderBody && renderBody()}
      </div>
    </div>
  );
};

export default Dropdown;
