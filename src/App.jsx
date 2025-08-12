import React, { useState, useEffect } from "react";
import History from "./History";
import Frontpage from "./Frontpage";
import Header from "./Header";
import Leader from "./Leader";
import Footer from "./Footer";
import Completedetail from "./Completedetail";
import Gallery from "./Gallery";

export default function App() {
  const [countdown, setCountdown] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    if (e) e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false); // close menu if on mobile
  };

  // Smoothly scroll to hash target on initial load if present
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      // Delay to ensure DOM is ready
      setTimeout(() => handleSmoothScroll(null, id), 0);
    }
  }, []);

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 7, 14); // Aug 14
    if (new Date() > targetDate) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const completedetailshowbtn = () => {
    if (!fulldetail) {
      setfulldetail(true);
      setotherdeatil(false);
    }
    else {
      setfulldetail(false);
      setotherdeatil(true);

    }
  }
  const closebtn = (e) => {
    setfulldetail(false);
    setotherdeatil(true);

  }

  const [fulldetail, setfulldetail] = useState(false);
  const [otherdeatil, setotherdeatil] = useState(true);

  return (
    <>
      {fulldetail &&
        <div
          className="overflow-auto h-[100vh]"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent"
          }}
        >
          <style>
            {`
              /* For Chrome, Edge, and Safari */
              .transparent-scrollbar::-webkit-scrollbar {
                width: 8px;
                background: transparent;
              }
              .transparent-scrollbar::-webkit-scrollbar-thumb {
                background: transparent;
              }
            `}
          </style>
          <div className="transparent-scrollbar h-full">
            <Completedetail closebtn={closebtn} />
          </div>
        </div>
      }
      {otherdeatil &&
        <div className="font-sans bg-white text-gray-900">
          {/* Navbar */}

          <Header isMobileMenuOpen={isMobileMenuOpen} handleSmoothScroll={handleSmoothScroll} toggleMobileMenu={toggleMobileMenu} />

          {/* Hero Section */}

          <div>
            <Frontpage handleSmoothScroll={handleSmoothScroll} />
          </div>

          {/* History Section */}

          <div id="history">
            <History completedetailshowbtn={completedetailshowbtn} />
          </div>

          {/* Leaders Section */}
          <div>
            <Leader />
          </div>

          {/* Gallery Section */}
          <div className="h-auto w-auto mt-2.5">
            <Gallery />
          </div>

        

          {/* Countdown Section */}
          {/* <section id="countdown" className="px-6 md:px-20 py-16 bg-green-700 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Countdown to Next 14th August</h3>
        <p className="text-2xl">{countdown}</p>
      </section> */}

          {/* Footer */}
          <Footer Date={Date} />
        </div>
      }

    </>

  );
}
