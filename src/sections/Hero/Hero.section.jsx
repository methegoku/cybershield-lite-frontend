const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#f0eaff] via-[#ffeafd] to-[#eafff7] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0eaff] via-[#ffeafd] to-[#eafff7] opacity-60 z-0"></div>

      <div className="relative z-10 bg-white p-12 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-center">
        <h1 className="text-[48px] mb-5 text-[#333] font-bold">
          CyberShield Lite
        </h1>
        <h2 className="text-[20px] mb-2 text-[#555]">
          Instant Cybersecurity Health Check for Small Businesses
        </h2>
        <p className="text-[16px] mb-8 text-[#777]">Protect your business.</p>
        <button
          className="bg-[#caa0ff] hover:bg-[#b187f7] text-[#333] px-6 py-3 rounded-full text-[16px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition duration-300"
          onClick={() => {
            const section = document.getElementById("scanweb");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Scan My Business
        </button>
      </div>
    </div>
  );
};

export default Hero;
