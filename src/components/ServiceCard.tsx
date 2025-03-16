import React from "react";
import { FaWarehouse, FaTools, FaShoppingCart, FaPaintRoller } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  const getIcon = () => {
    switch (icon) {
      case "gate":
        return <FaWarehouse className="w-12 h-12" />;
      case "structure":
        return <FaTools className="w-12 h-12" />;
      case "tools":
        return <FaShoppingCart className="w-12 h-12" />;
      case "custom":
        return <FaPaintRoller className="w-12 h-12" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-lg flex flex-col items-center text-center">
      <div className="text-gray-800 mb-4">{getIcon()}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};  

export default ServiceCard;
