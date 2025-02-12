import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold">CASESC</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("localizacao")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Localização
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Depoimentos
              </button>
              <a
                href="https://wa.me/5511999999999"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition duration-300"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("localizacao")}
                className="block text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md"
              >
                Localização
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="block text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md"
              >
                Depoimentos
              </button>
              <a
                href="https://wa.me/5511999999999"
                className="block bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-center transition duration-300"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
