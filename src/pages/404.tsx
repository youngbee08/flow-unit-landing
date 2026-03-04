import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import assets from "../assets/assets";

const NotFound: React.FC = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Animation */}
        <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px]">
          <Player
            loop
            autoplay
            src={assets.notfound}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left max-w-sm space-y-3">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-tertiary">
            Error 404
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-tertiary leading-relaxed">
            The page you're looking for doesn't exist or may have been moved.
            Let’s get you back to something useful.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 pt-2 md:justify-start justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/95 transition"
            >
              Go Home
            </Link>

            <Link
              to="/features"
              className="inline-flex items-center justify-center rounded-xl border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 transition"
            >
              View Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
