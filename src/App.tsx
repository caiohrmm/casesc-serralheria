import React from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Apple as WhatsApp,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import ImageCarousel from "./components/ImageCarousel";
import Navbar from "./components/Navbar";
import backgroundImage from "./CASESC1.jpg";
import backgroundImage2 from "./CASESC2.jpg";
import backgroundImage3 from "./CASESC3.jpg";
import backgroundImage4 from "./CASESC4.jpg";

const services = [
  {
    title: "Portões e Grades",
    description:
      "Portões automáticos e grades de segurança personalizadas para sua residência ou empresa.",
    icon: "gate",
  },
  {
    title: "Estruturas Metálicas",
    description:
      "Projetos e execução de estruturas metálicas para galpões, coberturas e mezaninos.",
    icon: "structure",
  },
  {
    title: "Manutenção",
    description:
      "Serviços de manutenção e reforma em peças metálicas, soldas e acabamentos.",
    icon: "tools",
  },
  {
    title: "Projetos Sob Medida",
    description:
      "Desenvolvimento de projetos personalizados de acordo com sua necessidade.",
    icon: "custom",
  },
];

const testimonials = [
  {
    name: "João Silva",
    text: "Excelente trabalho na instalação do portão automático. Profissionais pontuais e qualificados.",
    rating: 5,
  },
  {
    name: "Maria Oliveira",
    text: "Ótimo atendimento e acabamento impecável nas grades de proteção.",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    text: "Estrutura metálica do meu galpão ficou perfeita. Recomendo!",
    rating: 5,
  },
];

const images = [backgroundImage, backgroundImage2, backgroundImage3];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <header
        id="inicio"
        className="relative pt-16 min-h-[80vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage4})`,
        }}
      >
        {/* Overlay para desfoque */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              CASESC - CASA DO SERRALHEIRO DE SANTA CRUZ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Qualidade e precisão em cada projeto!
            </p>
            <a
              href="https://wa.me/5511999999999"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </header>

      {/* Image Carousel */}
      <section className="py-12">
        <ImageCarousel images={images} />
      </section>

      {/* About Us */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Com mais de 20 anos de experiência, a{" "}
              <strong>CASESC - CASA DO SERRALHEIRO DE SANTA CRUZ</strong> é
              referência em qualidade e inovação no setor metalúrgico. Nossa
              equipe altamente qualificada está comprometida em entregar
              soluções personalizadas que atendam às necessidades específicas de
              cada cliente, garantindo durabilidade e excelência em cada
              projeto.
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
                  <span>(11) 99999-9999</span>
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
            <p>Desenvolvido por Caio Henrique R. Martins</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
