import React from "react";
import {
  PenTool as Tool,
  Heater as Gate,
  Building2,
  Wrench,
} from "lucide-react";

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
        return <Gate className="w-12 h-12" />;
      case "structure":
        return <Building2 className="w-12 h-12" />;
      case "tools":
        return <Wrench className="w-12 h-12" />;
      case "custom":
        return <Tool className="w-12 h-12" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-gray-800 mb-4">{getIcon()}</div>
      <h3 className="text-xl font-bold mt-4 mb-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
