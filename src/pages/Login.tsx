import { useState } from "react";
import logo from "../assets/Media/light-logo.svg";
import { clsx } from "clsx";
export const Login = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="bg-[#0095da] h-screen relative ">
      <img
        src={logo}
        alt="logo"
        className="absolute left-1/2 -translate-x-1/2 top-30 z-10 w-24"
      />
      <form className="w-full rounded-t-lg flex flex-col bg-white absolute bottom-0 gap-100 p-4">
        <div className="flex flex-col gap-4 ">
          <span>ثبت نام | ورود</span>
          <span>سلام، لطفا شماره تلفن همراه خود را وارد کنید.</span>
          <div className="w-full">
            <div className="flex items-center border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <span className="text-sm text-slate-500 mr-2">98+|</span>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="تلفن همراه"
                className="w-full bg-transparent outline-none text-right placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <button className="bg-[#0095da] flex items-center justify-center rounded-lg h-14 p-2 text-white">
            تایید و دریافت کد
          </button>
          <div className="flex flex-row justify-center items-center">
            <button
              onClick={() => setShowInput(true)}
              className="bg-white text-black flex items-center justify-center rounded-lg h-14 p-2"
            >
              ورود با رمز عبور
            </button>
            {showInput && (
              <div className="flex items-center border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                <span className="text-sm text-slate-500 mr-2">98+|</span>
                <input
                  type="password"
                  inputMode="numeric"
                  placeholder="رمز عبور"
                  className="w-full bg-transparent outline-none text-right placeholder:text-slate-400"
                />
              </div>
            )}
            <svg
              className="w-5 h-5"
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
          </div>
        </div>
      </form>
    </div>
  );
};
