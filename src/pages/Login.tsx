import { useState } from "react";
import logo from "../assets/Media/light-logo.svg";
import { clsx } from "clsx";

export const Login = () => {
  const [passwordMode, setPasswordMode] = useState(false);

  return (
    <div className="bg-[#0095da] h-screen relative ">
      <img
        src={logo}
        alt="logo"
        className="absolute left-1/2 -translate-x-1/2 top-30 z-10 w-24"
      />

      <form className="w-full rounded-t-lg flex flex-col bg-white absolute bottom-0 gap-100 p-4">
        <div className="flex flex-col gap-4 ">
          {passwordMode ? (
            <>
              <span>ورود با رمز عبور</span>
              <span>شماره تلفن همراه و رمز عبور خود را وارد کنید.</span>
            </>
          ) : (
            <>
              <span>ثبت نام | ورود</span>
              <span>سلام، لطفا شماره تلفن همراه خود را وارد کنید.</span>
            </>
          )}

          <div className="w-full flex flex-col gap-3">
            {/* تلفن همراه (در هر دو حالت) */}
            <div className="flex items-center border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <span className="text-sm text-slate-500 mr-2">+98</span>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="تلفن همراه"
                className="w-full bg-transparent outline-none text-right placeholder:text-slate-400"
              />
            </div>

            {/* رمز عبور فقط وقتی passwordMode=true */}
            {passwordMode && (
              <div className="flex items-center border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                <input
                  type="password"
                  inputMode="numeric"
                  placeholder="رمز عبور"
                  className="w-full bg-transparent outline-none text-right placeholder:text-slate-400"
                />
                <svg
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12C3 12 5.7 6.75 12 6.75C18.3 6.75 21 12 21 12C21 12 18.3 17.25 12 17.25C5.7 17.25 3 12 3 12Z"
                    stroke="#0095da"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    stroke="#ff4f00"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col mb-3 mt-4">
          <button
            type="button"
            className="bg-[#0095da] flex items-center justify-center rounded-lg h-14 p-2 text-white"
          >
            {passwordMode ? "ورود" : "تایید و دریافت کد"}
          </button>

          <div className="flex flex-row justify-center items-center mt-3">
            {!passwordMode && (
              <>
                <button
                  type="button"
                  onClick={() => setPasswordMode(true)}
                  className="bg-white text-black flex items-center justify-center rounded-lg h-14 px-3"
                >
                  ورود با رمز عبور
                </button>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.333 11.833H6 M6.342 13l1.65-2.333m-1.65 0L7.992 13"
                  />
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.167 11.833h-2.333 M11.176 13l1.65-2.333m-1.65 0L12.826 13"
                  />
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M18 11.833h-2.334 M16.008 13l1.65-2.333m-1.65 0L17.658 13"
                  />
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 15V9a3 3 0 00-3-3H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3z"
                  />
                </svg>
              </>
            )}

            {passwordMode && (
              <div className="flex w-full justify-between text-xs text-slate-700 px-1">
                <button type="button">فراموشی رمز عبور</button>
                <button
                  type="button"
                  onClick={() => setPasswordMode(false)}
                  className="flex items-center gap-1"
                >
                  ورود با رمز یک‌بار مصرف
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};