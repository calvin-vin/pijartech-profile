"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ScrollLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  targetId?: string;
  onClick?: () => void;
}

export default function ScrollLink({ href, className, children, targetId, onClick }: ScrollLinkProps) {
  const pathname = usePathname();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we have a targetId and we're on the homepage
    if (targetId && pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        // Get the navbar height to offset the scroll position
        const navbar = document.querySelector('header');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        
        // Calculate the element's position relative to the top of the document
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        // Scroll with offset and smooth animation
        window.scrollTo({
          top: elementPosition - navbarHeight - 50, // Extra 50px padding untuk memastikan judul tidak tertutup navbar
          behavior: 'smooth',
        });
      }
      // Call additional onClick handler if provided
      if (onClick) onClick();
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}