"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({
  href,
  exact = false,
  children,
  className = "",
  onClick,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    className += " active";
  }

  return (
    <h1 onClick={onClick} className={`${className} cursor-pointer`}>
      {children}
    </h1>
  );
};

export default NavLink;
