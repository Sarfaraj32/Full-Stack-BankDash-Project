import { Shield, ShoppingBag, ShieldCheck } from "lucide-react";

const ServiceFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Unlimited protection",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      icon: ShoppingBag,
      title: "Shopping",
      description: "Buy. Think. Grow.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      icon: ShieldCheck,
      title: "Safety",
      description: "We are your allies",
      bgColor: "bg-cyan-100",
      iconColor: "text-cyan-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl bg-white"
            style={{ minWidth: "280px" }}
          >
            <div className={`p-3 rounded-full ${feature.bgColor}`}>
              <Icon className={`w-6 h-6 ${feature.iconColor}`} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceFeatures;
