"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome, HiMenuAlt2, HiInformationCircle, HiPhone } from "react-icons/hi";

const items = [
  { href: "/", label: "Home", icon: HiHome },
  { href: "/menu", label: "Menu", icon: HiMenuAlt2 },
  { href: "/about", label: "About", icon: HiInformationCircle },
  { href: "/contact", label: "Contact", icon: HiPhone },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="glass fixed inset-x-3 bottom-3 z-[996] flex items-center justify-around rounded-full px-2 py-2 shadow-glass md:hidden">
      {items.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center gap-0.5 rounded-full px-4 py-1.5 text-[11px] font-semibold transition-colors ${
            pathname === href ? "text-primary" : "text-dark/60"
          }`}
        >
          <Icon size={20} />
          {label}
        </Link>
      ))}
    </nav>
  );
}
