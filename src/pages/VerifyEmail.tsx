import React, { useEffect, useMemo, useRef, useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import assets from "../assets/assets";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 60;

const formatTime = (s: number) => `0:${String(s).padStart(2, "0")}`;

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

const VerifyEmail: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(RESEND_SECONDS);

  const base_url =
    (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "";

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const code = useMemo(() => otp.join(""), [otp]);
  const isComplete = otp.every((d) => d !== "");

  const focusIndex = (i: number) => {
    const el = inputsRef.current[i];
    el?.focus();
  };

  const handleChange = (i: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    setOtp((prev) => {
      const next = [...prev];
      next[i] = digit;
      return next;
    });

    if (digit && i < OTP_LENGTH - 1) focusIndex(i + 1);
  };

  const handleKeyDown = (
    i: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (otp[i]) {
        setOtp((prev) => {
          const next = [...prev];
          next[i] = "";
          return next;
        });
      } else if (i > 0) {
        focusIndex(i - 1);
        setOtp((prev) => {
          const next = [...prev];
          next[i - 1] = "";
          return next;
        });
      }
    }

    if (e.key === "ArrowLeft" && i > 0) focusIndex(i - 1);
    if (e.key === "ArrowRight" && i < OTP_LENGTH - 1) focusIndex(i + 1);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pasted) return;

    const next = Array(OTP_LENGTH).fill("") as string[];
    pasted.split("").forEach((d, idx) => {
      next[idx] = d;
    });

    setOtp(next);

    const last = Math.min(pasted.length, OTP_LENGTH) - 1;
    focusIndex(Math.max(last, 0));
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isComplete) return toast.error("Enter the 6-digit code");

    const currentUser = localStorage.getItem("current-auth");
    if (!currentUser)
      return toast.error("No email found. Please sign up again.");
    if (!base_url) return toast.error("Missing API base URL.");

    setIsSubmitting(true);
    try {
      const res = await axios.post(`${base_url}/auth/verify`, {
        email: currentUser,
        code,
      });

      if (res.status === 200 || res.status === 202) {
        toast.success("Verified successfully");
        localStorage.removeItem("current-auth");
        location.replace(import.meta.env.VITE_DASHBOARD_URL);
      }
    } catch (error: unknown) {
      toast.error(getAxiosMessage(error, "Verification failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    const currentUser = localStorage.getItem("current-auth");
    if (!currentUser)
      return toast.error("No email found. Please sign up again.");
    if (!base_url) return toast.error("Missing API base URL.");

    setIsResending(true);
    try {
      const res = await axios.post(`${base_url}/auth/resendOtp`, {
        email: currentUser,
      });

      if (res.status === 200) {
        toast.success("OTP resent successfully");
        setSecondsLeft(RESEND_SECONDS);
      }
    } catch (error: unknown) {
      toast.error(getAxiosMessage(error, "Failed to resend OTP"));
    } finally {
      setIsResending(false);
    }
  };

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const t = window.setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => window.clearInterval(t);
  }, [secondsLeft]);

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
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-tetiary hover:text-slate-800 transition"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <div className="text-center space-y-2 mt-4">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Mail className="text-primary" size={22} />
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-primary">
              Verify your email
            </h1>
            <p className="text-tetiary">
              Enter the 6-digit code we sent to your email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div
              className="flex items-center justify-center gap-2 sm:gap-3"
              onPaste={handlePaste}
            >
              {otp.map((val, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputsRef.current[i] = el;
                  }}
                  value={val}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  className="w-11 h-12 sm:w-12 sm:h-14 text-center text-lg font-semibold rounded-xl border border-slate-200 bg-white
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={!isComplete || isSubmitting}
              className="w-full bg-primary/90 hover:bg-primary cursor-pointer text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-600/20
                         active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Verifying..." : "Verify"}
            </button>

            <div className="text-center text-sm text-tetiary">
              Didn’t receive a code?{" "}
              <button
                type="button"
                onClick={handleResend}
                disabled={isResending || secondsLeft > 0}
                className="font-semibold text-primary/90 hover:text-primary hover:underline transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isResending
                  ? "Resending..."
                  : secondsLeft > 0
                    ? `Resend in ${formatTime(secondsLeft)}`
                    : "Resend"}
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          Tip: You can paste the full code — it will auto-fill.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
