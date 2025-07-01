import { Toaster } from "react-hot-toast";
import CyberSecurity from "./sections/CyberSecurity/CyberSecurity.section";
import Hero from "./sections/Hero/Hero.section";
import Footer from "./sections/Footer/Footer.section";
import Feature from "./sections/Features/Feature.section";
import Working from "./sections/Working/Working.section";

const App = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Feature />
        <Working />
        <CyberSecurity />
        <Footer />
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </>
  );
};

export default App;
