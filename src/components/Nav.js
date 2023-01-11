import React, { memo } from "react";
import { useLocation } from "react-router";
import { LinkStyled, NavList } from "./Navs.Styled";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "starred" },
];

function Nav() {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map((item) => (
          <li keys={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? "active" : " "}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
}

export default memo(Nav);
