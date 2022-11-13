import { List, ToggleLeft, ToggleRight } from "phosphor-react";
import { useState } from "react";
import { Inicio } from "./Inicio";

export function Navbar() {

  const [language, setLanguage] = useState("pt")

  return (
    <>
      <div className="bg-personalite-800  w-full h-14 flex items-center justify-center">
        <div className="flex flex-1 justify-end mr-2 md:hidden">
          <List
            size={45}
            weight="light"
          />
        </div>
        <div className="hidden md:flex items-center">
          <a href="/" className="p-2 hover:bg-personalite-900 rounded-full font-bold text-lg">Início</a>
          <a href="#" className="p-2 hover:bg-personalite-900 rounded-full font-bold text-lg">Sobre Mim</a>
          <a href="#" className="p-2 hover:bg-personalite-900 rounded-full font-bold text-lg">Projetos</a>
          <a href="#" className="p-2 hover:bg-personalite-900 rounded-full font-bold text-lg">Contato</a>
          <p className="font-bold ml-5">EN</p>
          <button
            type="button"
            onClick={() => {
              if (language === 'en') {
                setLanguage("pt")
              } else if (language === "pt") {
                setLanguage("en")
              }
            }}>
            {language === 'en' ? <ToggleLeft size={45} /> : <ToggleRight size={45} />}
          </button>
          <p className="font-bold">PT</p>
        </div>
      </div>
      <Inicio/>
    </>
  );
}