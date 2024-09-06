import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

const activeProps = {
  style: { textDecoration: "underline", color: "#3E63DD" },
};

interface NavLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export default function NavLink({
  to,
  children,
  className = "",
}: NavLinkProps) {
  return (
    <Link
      to={to}
      activeProps={activeProps}
      className={`hover:text-blue-700 ${className}`}
    >
      {children}
    </Link>
  );
}
