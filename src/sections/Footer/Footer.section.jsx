const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 px-5 py-10 font-sans">
      <div className="flex flex-wrap justify-around gap-8">
        <div className="max-w-xs">
          <h3 className="text-xl mb-2">🔰 CyberShield Lite</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Free cybersecurity health checks for small businesses.<br />
            Stay safe, stay protected.
          </p>
          <a
            href="https://cybersheildlite.carrd.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition duration-300"
          >
            Visit Original Site
          </a>
        </div>

        <div className="max-w-xs">
          <h3 className="text-lg mb-2">Contact Us</h3>
          <p className="text-slate-300 text-sm mb-4">hello@cybersheildlite.com</p>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition duration-300"
          >
            View on GitHub
          </a>
        </div>

        <div className="max-w-xs">
          <h3 className="text-lg mb-2">Important Notice</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            CyberShield Lite provides a basic health check and is not a replacement for professional security services. For comprehensive security solutions, please consult with cybersecurity professionals.
          </p>
        </div>
      </div>

      <hr className="border-t border-slate-700 my-8" />

      <div className="text-center space-y-2">
        <p className="text-slate-400 text-sm">
          © 2025 CyberShield Lite. Built with ❤️ for small businesses everywhere.
        </p>
        <p className="text-slate-400 text-sm">
          Also available at{' '}
          <a
            href="https://cybersheildlite.carrd.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-500"
          >
            cybersheildlite.carrd.co
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
