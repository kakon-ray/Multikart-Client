import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomeLinkMobile({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "rgb(234 88 12)" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomeLinkMobile;
