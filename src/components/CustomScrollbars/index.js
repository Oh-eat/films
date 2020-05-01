import React from "react";
import Scrollbars from "react-custom-scrollbars";

function CustomScrollbars({ children }) {
  return (
    <Scrollbars
      autoHide
      style={{ width: "100%", height: `100vh` }}
      renderView={(props) => <div id="scrollbar" {...props} />}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            borderRadius: "1rem",
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
}

export default CustomScrollbars;
