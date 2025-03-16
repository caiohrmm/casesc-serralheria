import React from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import Navbar from "./components/Navbar";
import backgroundImage4 from "./CASESC4.jpg";
// Importando o ícone de WhatsApp do heroicons
import { PhoneIcon } from "@heroicons/react/24/solid";
import logoCaioMartins from "./logocaiomartins.png";

const services = [
  {
    title: "Venda de Perfis e Chapas Metálicas",
    description:
      "Oferecemos uma ampla variedade de perfis, chapas de aço, alumínio e outros metais para fabricação e construção.",
    icon: "gate",
  },
  {
    title: "Venda de Ferragens e Acessórios",
    description:
      "Comercializamos dobradiças, fechaduras, roldanas, trilhos e diversos acessórios essenciais para serralheria.",
    icon: "structure",
  },
  {
    title: "Venda de Máquinas e Ferramentas",
    description:
      "Disponibilizamos equipamentos e ferramentas de corte, solda e acabamento para profissionais da área.",
    icon: "tools",
  },
  {
    title: "Venda de Tintas, Vernizes e Produtos para Acabamento.",
    description:
      "Trabalhamos com tintas, vernizes e produtos para tratamento e proteção de peças metálicas.",
    icon: "custom",
  },
];

const testimonials = [
  {
    name: "João Silva",
    text: "Encontrei tudo o que precisava para minha serralheria na CASESC. Perfis, chapas e ferragens de alta qualidade, com ótimo preço e atendimento impecável!",
    rating: 5,
  },
  {
    name: "Maria Oliveira",
    text: "Produtos excelentes! Recomendo demais! Custo benefício bem alinhado, ótima loja !",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    text: "A melhor loja para serralheiros! Comprei ferramentas para o meu negócio e fiquei impressionado com a variedade e o atendimento!",
    rating: 5,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <header
        id="inicio"
        className="relative pt-16 min-h-[100vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage4})`,
        }}
      >
        {/* Overlay mais escuro para melhor contraste */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              CASESC - CASA DO SERRALHEIRO DE SANTA CRUZ
            </h1>
            <p className="text-xl md:text-3xl mb-10 text-white">
              Especializada na venda dos melhores produtos para serralheria.
            </p>
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full shadow-lg"
            >
              <PhoneIcon className="w-6 h-6 mr-2" />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </header>

      {/* About Us */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Com mais de 20 anos de experiência, a{" "}
              <strong>CASESC - CASA DO SERRALHEIRO DE SANTA CRUZ</strong> é a
              principal fornecedora de materiais para serralheria, oferecendo
              uma ampla variedade de produtos de alta qualidade. Trabalhamos com
              perfis metálicos, chapas, ferragens, tintas, máquinas e acessórios
              para atender todas as necessidades do setor. Nossa equipe
              altamente qualificada está pronta para oferecer suporte e as
              melhores soluções para seu negócio, garantindo durabilidade,
              eficiência e excelência em cada produto.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="localizacao" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossa Localização
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14702.153211398168!2d-49.635828047212094!3d-22.893507768227952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c06be33e6ebcbd%3A0x692137ea1106a949!2sCASESC%20-%20CASA%20DO%20SERRALHEIRO%20DE%20SANTA%20CRUZ%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1739368048613!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Depoimentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>(14) 3372-0512</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>contato@casescserralheria.com.br</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>
                    Rua João Andreolli, 242 - Santa Cruz do Rio Pardo/SP
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                Horário de Funcionamento
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Segunda a Sexta: 8h às 18h</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Sábado: 8h às 12h</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; 2025 CASESC - Casa do serralheiro de Santa Cruz. Todos os
              direitos reservados.
            </p>
            <div className="mt-4 flex flex-col items-center">
              <img src={logoCaioMartins} alt="Logo Caio Martins" className="h-10 mb-2" />
              <a href="https://caiohenriquerm.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                Caio Martins | Desenvolvedor Web
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
