import React from "react";
import Scrollbars from "react-custom-scrollbars";

export function initializeScrollbar() {
  document.getElementById("scrollbar").scrollTo({ top: 0 });
}

function CustomScrollbars({ children }) {
  // const onResize = useCallback(() => {
  //   const scrollbar = document.getElementById("scrollbar");
  //   const scrollbarSize = window.innerWidth - scrollbar.clientWidth;
  //   if (scrollbarSize !== 0) {
  //     scrollbar.style.marginRight = `-${scrollbarSize}px`;
  //     scrollbar.style.marginBottom = `-${scrollbarSize}px`;
  //   }
  // }, []);
  // const debouncedOnResize = useCallback(debounce(onResize, 200), [onResize]);

  // useEffect(() => {
  //   window.addEventListener("resize", debouncedOnResize);
  //   return () => {
  //     window.removeEventListener("resize", debouncedOnResize);
  //   };
  // }, [debouncedOnResize]);

  return (
    <Scrollbars
      autoHide
      style={{ width: "auto", height: `100%` }}
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
