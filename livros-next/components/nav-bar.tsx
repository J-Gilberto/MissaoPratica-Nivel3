"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

const navLinks = [
  {
    path: "/",
    name: "Entrada"
  },
  {
    path: "/LivroLista",
    name: "Listas de Livros"
  },
  {
    path: "/LivroDados",
    name: "Dados dos Livros"
  },
];

function Navbar() {

  const pathname = usePathname() || "/";
  const [hoverLink, setHoverLink] = useState(pathname);

  return (
    <div style={{ fontFamily: 'Times New Roman', marginBottom: '120px', textShadow: '2px 2px 4px red', fontStyle: 'italic'}}>
      <nav className="flex items-left justify-left gap-6 w-full z[100] rounded-lg bg-dark">
        {
          navLinks.map((item, index) => {
            const isActive = item.path === pathname;

            return (
              <Link key={item.path} href={item.path} 
              className={`px-4 py-4 rounded-full text-sm lg:text-3xl relative no-underline duration-300 ease-in ${isActive ? "text-zinc-200" : "text-zinc-500"}`}>
                <span>{item.name}</span>
              </Link>
            )
          })
        }
      </nav>
    </div>
  )
}

export default Navbar;

