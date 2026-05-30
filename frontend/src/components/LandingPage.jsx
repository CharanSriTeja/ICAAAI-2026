import React from "react";
import { useNavigate } from "react-router-dom";

const ICAAAILandingPage = ({ setAboutTab }) => {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    if (setAboutTab) {
      setAboutTab("conference");
    }
    setTimeout(() => {
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <main
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center px-6 pt-36 pb-20 lg:px-10 bg-slate-50"
    >
      {/* Faint Academic Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,45,89,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,45,89,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Soft elegant warm/blue ambient radial glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-orange-50/50 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto max-w-4xl w-full flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4.5 py-1.5 text-xs uppercase tracking-[0.25em] text-accent font-extrabold shadow-sm">
          International Conference • AI Research • December 2025
        </div>

        <h2 className="max-w-3xl text-2xl sm:text-4xl lg:text-[2.5rem] font-extrabold uppercase leading-[1.2] text-primary tracking-wide">
          3<sup>rd</sup> International Conference on Algorithms in Advanced Artificial Intelligence
        </h2>

        <div className="mt-6 space-y-2.5">
          <p className="text-xl font-bold tracking-[0.15em] text-accent">
            ICAAAI - 2025
          </p>
          <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-slate-700">
            December 11–13
          </p>
          <p className="max-w-2xl text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-slate-500 mx-auto">
            Department of Computer Science and Engineering
          </p>
          <p className="max-w-2xl text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-primary mx-auto">
            SRKR Engineering College - Bhimavaram
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
              window.scrollTo({ top: 0 });
            }}
            className="rounded-full bg-accent hover:bg-accent/90 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-accent/15 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            Register Now
          </a>

          <button
            onClick={handleExploreClick}
            className="rounded-full border-2 border-primary/20 hover:border-primary/40 bg-white hover:bg-slate-50 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            Explore Conference
          </button>
        </div>
      </section>
    </main>
  );
};

export default ICAAAILandingPage;
