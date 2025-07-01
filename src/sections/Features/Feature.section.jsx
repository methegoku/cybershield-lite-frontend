import { features } from "../../utils/data.util";

const Feature = () => {
  return (
    <div className="py-16 px-5 text-center bg-white">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        What CyberShield Lite Checks
      </h2>
      <p className="text-gray-600 text-base mb-10 max-w-2xl mx-auto">
        Our comprehensive scan analyzes multiple security aspects to give you a complete picture
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
