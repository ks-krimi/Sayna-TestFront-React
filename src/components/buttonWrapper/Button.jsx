import React from "react";

function Button({ children, styled = false, select = false }) {
  return (
    <div className="button">
      {styled ? (
        <span>
          <img src="/assets/icons/star1.svg" alt="star" />
        </span>
      ) : null}
      <p>{children}</p>
      {styled || select ? (
        <img src="/assets/icons/ArrowDown.svg" alt="ArrowDown" />
      ) : null}
    </div>
  );
}

export default Button;
