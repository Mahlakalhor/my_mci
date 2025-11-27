export const Login = () => {
  return (
    <div className="bg-[#0095da] h-full relative ">
      <div className="w-full rounded-t-lg flex flex-col bg-white absolute">
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

        <button className="bg-[#0095da] flex items-center justify-center rounded-lg h-14 p-2 text-white">
          تایید و دریافت کد
        </button>
        <button className="bg-white text-black flex items-center justify-center rounded-lg h-14 p-2">
          ورود با رمز عبور
        </button>
        <app-icon
          _ngcontent-ng-c4278918718=""
          svgicon="login_by_password"
          classlist="login-icons-stroke flex !h-5 !w-5 !text-xl"
        >
          <mat-icon
            role="img"
            class="mat-icon notranslate !h-5 !text-xl !w-5 flex login-icons-stroke mat-icon-no-color"
            aria-hidden="true"
            data-mat-icon-type="svg"
            data-mat-icon-name="login_by_password"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fit=""
              height="100%"
              width="100%"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#ff4f00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M8.333 11.833H6M6.342 13l1.65-2.333m-1.65 0L7.992 13M13.167 11.833h-2.333M11.176 13l1.65-2.333m-1.65 0L12.826 13M18 11.833h-2.334M16.008 13l1.65-2.333m-1.65 0L17.658 13"
              ></path>
              <path
                stroke="#0095da"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21 15V9a3 3 0 00-3-3H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3z"
              ></path>
            </svg>
          </mat-icon>
        </app-icon>
      </div>
    </div>
  );
};
