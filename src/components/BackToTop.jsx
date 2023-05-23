import React from "react";
import top from "../assets/img/download.png";

const BackToTop = () => {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <img
            onClick={moveToTop}
            className="position-fixed bottom-0 end-0 me-4 mb-4 w_55 rounded-circle"
            src={top}
            alt="top"
          />
        ) : (
          ""
        )}
        <div></div>
      </div>
    </>
  );
};

export default BackToTop;
