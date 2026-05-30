import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarDropdown = ({ label, items = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-semibold tracking-wide text-white/90 hover:text-accent transition-colors duration-200 cursor-pointer bg-transparent border-none"
        type="button"
      >
        {label}
        <span className={`text-[9px] transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      <div
        className={`absolute left-0 top-full pt-3 w-64 transition-all duration-300 ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-2"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl py-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={(e) => {
                setOpen(false);
                item.onClick(e);
              }}
              className="w-full text-left block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-accent transition-colors duration-200 cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ setAboutTab }) => {
  const navigate = useNavigate();
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileConfOpen, setMobileConfOpen] = useState(false);

  const navigateTo = (path, anchorId = null, aboutTabName = null) => {
    setMobileMenuOpen(false);
    if (path === "/") {
      navigate("/");
      if (aboutTabName && setAboutTab) {
        setAboutTab(aboutTabName);
      }
      setTimeout(() => {
        const targetId = anchorId || "home";
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 150);
    } else {
      navigate(path);
      if (anchorId) {
        setTimeout(() => {
          const el = document.getElementById(anchorId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0 });
          }
        }, 150);
      } else {
        window.scrollTo({ top: 0 });
      }
    }
  };

  const handleBrochureClick = () => {
    window.open("/Icaaai-2025Brochure.pdf", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-primary/20 bg-primary/95 backdrop-blur-md shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigateTo("/")} className="flex items-center gap-3 bg-transparent border-none cursor-pointer text-left p-0">
            <div className="flex items-center">
              {logoError ? (
                <div className="flex h-10 w-24 items-center justify-center bg-gradient-to-br from-primary to-blue-800 text-sm font-bold text-white rounded-md">
                  SRKR Logo
                </div>
              ) : (
                <img
                  src="/img/srkr.png"
                  alt="SRKR Engineering College logo"
                  className="h-10 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              )}
            </div>
            <div className="hidden sm:block border-l border-white/20 pl-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-extrabold leading-none">
                ICAAAI 2025
              </p>
              <h1 className="text-[11px] font-bold text-white mt-1 leading-none tracking-wide">
                SRKR Engineering College
              </h1>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          <button
            onClick={() => navigateTo("/", "home")}
            className="text-sm font-semibold tracking-wide text-white/90 hover:text-accent transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            HOME
          </button>

          <NavbarDropdown
            label="ABOUT"
            items={[
              { label: "About College", onClick: () => navigateTo("/", "about", "college") },
              { label: "About CSE Dept", onClick: () => navigateTo("/", "about", "cse") },
              { label: "About Conference", onClick: () => navigateTo("/", "about", "conference") },
            ]}
          />

          <NavbarDropdown
            label="CONFERENCE INFO"
            items={[
              { label: "Chief Guests", onClick: () => navigateTo("/", "chief-guests") },
              { label: "Keynote Speakers", onClick: () => navigateTo("/", "keynote-speakers") },
              { label: "Committees", onClick: () => navigateTo("/committees") },
              { label: "Brochure", onClick: handleBrochureClick },
              { label: "Schedule", onClick: () => navigateTo("/", "schedule") },
            ]}
          />

          <button
            onClick={() => navigateTo("/call-for-papers")}
            className="text-sm font-semibold tracking-wide text-white/90 hover:text-accent transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            CALL FOR PAPERS
          </button>

          <button
            onClick={() => navigateTo("/contact", "venue")}
            className="text-sm font-semibold tracking-wide text-white/90 hover:text-accent transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            LOCATION
          </button>

          <button
            onClick={() => navigateTo("/contact")}
            className="text-sm font-semibold tracking-wide text-white/90 hover:text-accent transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            CONTACT
          </button>

          <button
            onClick={() => navigateTo("/register")}
            className="rounded-full bg-accent hover:bg-accent/90 px-5.5 py-2 text-sm font-bold tracking-wide text-white transition-all duration-200 shadow-sm shadow-accent/10 cursor-pointer border-none"
          >
            REGISTER
          </button>
        </div>

        {/* Mobile Hamburger menu */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden rounded-xl border border-white/20 p-2 text-white/95 cursor-pointer hover:bg-white/10 transition-colors bg-transparent"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="relative ml-auto h-full w-80 max-w-[85vw] border-l border-slate-100 bg-white p-6 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-base font-extrabold text-primary">ICAAAI 2025</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-slate-400 hover:text-slate-700 cursor-pointer bg-transparent border-none"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col gap-5 overflow-y-auto pr-2 flex-grow">
              <button
                onClick={() => navigateTo("/", "home")}
                className="text-left text-base font-semibold text-slate-700 hover:text-accent transition-colors cursor-pointer bg-transparent border-none"
              >
                HOME
              </button>

              {/* Mobile ABOUT Accordion */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex w-full items-center justify-between text-base font-semibold text-slate-700 hover:text-accent transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  <span>ABOUT</span>
                  <span className={`text-[10px] transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {mobileAboutOpen && (
                  <div className="mt-2 pl-4 border-l border-slate-100 flex flex-col gap-3">
                    <button
                      onClick={() => navigateTo("/", "about", "college")}
                      className="text-left text-sm text-slate-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                    >
                      About College
                    </button>
                    <button
                      onClick={() => navigateTo("/", "about", "cse")}
                      className="text-left text-sm text-slate-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                    >
                      About CSE Dept
                    </button>
                    <button
                      onClick={() => navigateTo("/", "about", "conference")}
                      className="text-left text-sm text-slate-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                    >
                      About Conference
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile CONFERENCE Accordion */}
              <div>
                <button
                  onClick={() => setMobileConfOpen(!mobileConfOpen)}
                  className="flex w-full items-center justify-between text-base font-semibold text-slate-700 hover:text-accent transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  <span>CONFERENCE INFO</span>
                  <span className={`text-[10px] transition-transform duration-200 ${mobileConfOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {mobileConfOpen && (
                  <div className="mt-2 pl-4 border-l border-slate-100 flex flex-col gap-3">
                    <button
                      onClick={() => navigateTo("/", "chief-guests")}
                      className="text-left text-sm text-slate-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                    >
                      Chief Guests
                    </button>
                    <button
                      onClick={() => navigateTo("/", "keynote-speakers")}
                      className="text-left text-sm text-slate-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                    >
                      Keynote Speakers
                    </button>
                    <button
                      onClick={() => navigateTo("/committees")}
                      className="text-left text-sm text-slate-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                    >
                      Committees
                    </button>
                    <button
                      onClick={handleBrochureClick}
                      className="text-left text-sm text-slate-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                    >
                      Brochure
                    </button>
                    <button
                      onClick={() => navigateTo("/", "schedule")}
                      className="text-left text-sm text-slate-500 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                    >
                      Schedule
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigateTo("/call-for-papers")}
                className="text-left text-base font-semibold text-slate-700 hover:text-accent transition-colors cursor-pointer bg-transparent border-none"
              >
                CALL FOR PAPERS
              </button>

              <button
                onClick={() => navigateTo("/contact", "venue")}
                className="text-left text-base font-semibold text-slate-700 hover:text-accent transition-colors cursor-pointer bg-transparent border-none"
              >
                LOCATION
              </button>

              <button
                onClick={() => navigateTo("/contact")}
                className="text-left text-base font-semibold text-slate-700 hover:text-accent transition-colors cursor-pointer bg-transparent border-none"
              >
                CONTACT
              </button>

              <button
                onClick={() => navigateTo("/register")}
                className="mt-4 text-center rounded-full bg-accent hover:bg-accent/90 py-3 text-sm font-bold tracking-wide text-white transition-all duration-200 block shadow-md cursor-pointer border-none"
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
