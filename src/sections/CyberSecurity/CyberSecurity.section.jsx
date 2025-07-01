import { useState } from "react";
import { LuLoaderCircle, LuArrowRight } from "react-icons/lu";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import Input from "../../components/Inputs/Input.component";
import { validateEmail, validateURL } from "../../utils/helper.util";
import axiosInstance from "../../utils/axiosInstance.util";
import { API_PATHS } from "../../utils/apiPaths.util";

const CyberSecurity = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter valid email");
      return;
    }

    if (!validateURL(websiteUrl)) {
      toast.error("Please enter valid website url");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axiosInstance.post(
        API_PATHS.AI.GENERATE_WEBSITE_SECURITY,
        { website: websiteUrl }
      );

      const reportData = response.data;
      const formattedReport = reportData
        .map((item) => {
          const key = Object.keys(item)[0];
          return `${key.toUpperCase()}: ${item[key]}`;
        })
        .join("\n");

      const emailParams = {
        to_email: email,
        website_url: websiteUrl,
        report: formattedReport,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Report generated and sent to email");
      setEmail("");
      setWebsiteUrl("");
    } catch (error) {
      toast.error("Error sending email");
      console.error("Error sending email", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="scanweb" className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
          Security Scan Form
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Fill out the form below to receive your security analysis
        </p>

        <div className="mb-4">
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Business Email"
            placeholder="john@example.com"
            type="email"
          />
        </div>

        <div className="mb-6">
          <Input
            value={websiteUrl}
            onChange={({ target }) => setWebsiteUrl(target.value)}
            label="Website URL"
            placeholder="www.example.com"
            type="text"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-md transition-all duration-300"
        >
          {isLoading && <LuLoaderCircle className="animate-spin" />}
          {isLoading ? "Sending..." : "Generate report and send"}
          {!isLoading && (
            <LuArrowRight className="group-hover:translate-x-0.5" />
          )}
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Your report will be sent to your email and available for download.
        </p>
      </form>
    </section>
  );
};

export default CyberSecurity;
