import { steps } from "../../utils/data.util";

const Working = () => {
  const handleFillFormClick = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-5 py-16 max-w-3xl mx-auto text-left">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
        🔍 How It Works
      </h2>

      <div className="flex flex-col gap-6">
        {steps.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              {item.step}
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-8 inline-block bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-md cursor-pointer hover:bg-emerald-200 transition"
        onClick={handleFillFormClick}
      >
        ✅ Fill the Form
      </div>
    </div>
  );
};

export default Working;
