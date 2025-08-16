import React, { useState, useEffect } from "react";
import History from "./History";
import Frontpage from "./Frontpage";
import Header from "./Header";
import Leader from "./Leader";
import Footer from "./Footer";
import Completedetail from "./Completedetail";
import Gallery from "./Gallery";
import Countdown from "./Countdown";
import Curranttimes from "./Curranttimes";
import './index.css'

export default function App() {

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
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const calculateCountdown = () => {
      const currentYear = new Date().getFullYear()
      const pakistanIndependenceYear = 1947
      const yearsSinceIndependence = currentYear - pakistanIndependenceYear
      // The console.log is being called every time calculateCountdown runs (i.e., on mount).
      // If you only want to see the value once, you can remove or comment out this line:
      // console.log(`${currentYear}`)   
      setCountdown(`${yearsSinceIndependence}th`)

    }

    calculateCountdown()

  }, [])

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
        <div className=" bg-white text-gray-900">
          {/* Navbar */}

          <Header isMobileMenuOpen={isMobileMenuOpen} handleSmoothScroll={handleSmoothScroll} toggleMobileMenu={toggleMobileMenu} />

          {/* Hero Section */}

          <div>
            <Frontpage handleSmoothScroll={handleSmoothScroll} countdown={countdown} />
          </div>

          {/* History Section */}

          <div id="history">
            <History completedetailshowbtn={completedetailshowbtn} />
          </div>

          {/* Leaders Section */}
          <div >
            <Leader />
          </div>

          {/* Gallery Section */}
          <div className="h-auto w-auto mt-2.5" id="gallery">
            <Gallery />
          </div>

          {/* Countdown Section */}
          <div>
            <Countdown countdown={countdown} />
          </div>
          {/* Curranttimes Section */}
          <div id="date&time">
            <Curranttimes />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      }

    </>

  );
}
