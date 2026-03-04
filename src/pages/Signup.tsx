import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, UserRound } from "lucide-react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import assets from "../assets/assets";

type VerifyResponse = {
  message?: string;
};
function getAxiosMessage(err: unknown, fallback: string) {
  if (axios.isAxiosError(err)) {
    const data = err.response?.data as VerifyResponse | undefined;
    return data?.message || err.message || fallback;
  }
  if (err instanceof Error) return err.message || fallback;
  return fallback;
}
function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const base_url = import.meta.env.VITE_API_BASE_URL;

  const validationSchema = yup.object({
    name: yup.string().trim().required("Please provide your name"),
    userName: yup
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters")
      .required("Please provide your username"),
    email: yup
      .string()
      .trim()
      .email("Please enter a valid email")
      .required("Please provide your email"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Please provide your password"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const res = await axios.post(`${base_url}/auth/signup`, values);
        if (res.status === 201 || res.status === 200) {
          toast.success("Account created successfully");
          setTimeout(() => {
            const loading = toast.loading("Redirecting to verification...");
            setTimeout(() => {
              toast.dismiss(loading);
              localStorage.setItem("current-auth", values.email);
              navigate("/verify-email");
            }, 1200);
          }, 800);
        }
      } catch (error: unknown) {
        const errMessage = getAxiosMessage(error, "Failed to create account");
        toast.error(errMessage);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-dvh w-full flex items-center justify-center bg-linear-to-b from-primary/10 via-white to-white px-4 py-10 font-sans text-slate-800">
      <div className="w-full max-w-130">
        <div
          className="flex items-center lg:justify-center gap-0 mb-2 lg:mb-7 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-24 h-24">
            <img src={assets.noBgLogo} alt="Logo" className="w-full h-full" />
          </div>
          <span className="hidden -translate-x-4 lg:flex text-2xl font-bold text-blue-900 tracking-tight">
            FlowUnit
          </span>
        </div>

        <div className="bg-white rounded-[28px] shadow-xl shadow-slate-900/10 border border-slate-100 px-6 sm:px-10 py-10">
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">
              Create an account
            </h1>
            <p className="text-tetiary">
              Let’s get you set up. Enter your details below.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="mt-10 space-y-5">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-tetiary group-focus-within:text-primary transition-colors">
                <UserRound size={20} />
              </div>
              <input
                type="text"
                placeholder="Full name"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-tetiary placeholder-slate-400"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-xs text-red-600 font-medium">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-tetiary group-focus-within:text-primary transition-colors">
                <User size={20} />
              </div>
              <input
                type="text"
                placeholder="Username"
                name="userName"
                id="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-tetiary placeholder-slate-400"
              />
              {formik.touched.userName && formik.errors.userName && (
                <p className="mt-1 text-xs text-red-600 font-medium">
                  {formik.errors.userName}
                </p>
              )}
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-tetiary group-focus-within:text-primary transition-colors">
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-tetiary placeholder-slate-400"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-xs text-red-600 font-medium">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-tetiary group-focus-within:text-primary transition-colors">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-11 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-tetiary placeholder-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-xs text-red-600 font-medium">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-primary/90 hover:bg-primary cursor-pointer text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formik.isSubmitting ? "Creating account..." : "Create account"}
            </button>

            <div className="text-center text-sm text-tetiary">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() =>
                  (location.href = import.meta.env.VITE_DASHBOARD_URL)
                }
                className="font-semibold text-primary/90 hover:text-primary hover:underline transition-all"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
