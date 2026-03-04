import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import navitems from "../../lib/navitems";
import assets from "../../assets/assets";
import { MenuIcon } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        className="bg-white border-b border-tertiary/30"
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <nav className="app-container h-14 flex items-center gap-3">
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl hover:bg-black/5 transition"
              aria-label="Open menu"
              whileTap={{ scale: 0.95 }}
            >
              <MenuIcon className="text-2xl text-primary" />
            </motion.button>

            <Link to="/" className="flex items-center gap-3">
              <img
                src={assets.noBgLogo}
                alt="FlowUnit logo"
                className="w-15 h-10 object-contain -translate-x-5"
              />
              <span className="text-lg font-bold text-primary -translate-x-12">
                FlowUnit
              </span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            {navitems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  className={[
                    "text-sm font-semibold transition relative",
                    active
                      ? "text-primary/80"
                      : "text-tertiary hover:text-primary/80",
                  ].join(" ")}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center justify-end">
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4"
            >
              <Link
                to={import.meta.env.VITE_DASHBOARD_URL}
                className="text-sm font-semibold text-tertiary hover:text-primary transition-colors"
              >
                Login
              </Link>

              <Link
                to="/get-started"
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-primary text-white text-sm font-semibold shadow-sm hover:brightness-110 transition"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden ml-auto w-10" aria-hidden="true" />
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="absolute left-0 right-0 z-50 md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="bg-white border-b border-tertiary/20 shadow-lg">
                <div className="app-container py-4">
                  <div className="flex flex-col gap-1">
                    {navitems.map((item) => {
                      const active = location.pathname === item.path;

                      return (
                        <a
                          key={item.name}
                          href={item.path}
                          onClick={() => setOpen(false)}
                          className={[
                            "px-4 py-3 rounded-xl text-sm font-semibold transition",
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-tertiary hover:bg-gray-50 hover:text-primary",
                          ].join(" ")}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-4 border-t border-tertiary/15 flex flex-col gap-3">
                    <Link
                      to={import.meta.env.VITE_DASHBOARD_URL}
                      onClick={() => setOpen(false)}
                      className="text-center text-sm font-semibold text-tertiary hover:text-primary transition-colors"
                    >
                      Login
                    </Link>

                    <Link
                      to="/get-started"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold shadow-sm hover:brightness-110 transition"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
