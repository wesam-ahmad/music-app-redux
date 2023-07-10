import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const portalRoot = React.useRef(document.getElementById("portal-root"));
  const element = React.useMemo(() => document.createElement("div"), []);

  React.useEffect(() => {
    if (portalRoot.current && element) {
      portalRoot.current.appendChild(element);
    }

    return () => {
      if (portalRoot.current && element) {
        portalRoot.current.removeChild(element);
      }
    };
  }, [portalRoot, element]);

  return ReactDOM.createPortal(children, element);
};

export default Portal;
