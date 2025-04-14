// NavigationButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@relume_io/relume-ui";

export default function NavigationButton({ to, children, ...props }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
