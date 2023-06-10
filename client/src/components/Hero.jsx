function Hero() {
  return (
    <div className="flex-col items-center justify-center h-screen p-36 jd_flex">
      <small className="pt-8 text-transparent text-body_text bg-gradient-to-r from-main_orange to-main_gold bg-clip-text">
        Welcome
      </small>
      <h1 className="flex flex-col my-5 space-y-4 font-light leading-none text-center text-heading">
        <span className="text-main_white ">Welcome to WebWale.</span>
        <span className="text-main_grey">
          Resources & tools for Web Developers.
        </span>
      </h1>
      <p className="w-[50%] text-center text-body_text mb-8">
        Don&apos;t forget to check back regularly for new updates and resources.
        Click the button below to access the toolkit.
      </p>
      <a
        style={{
          fontFamily: "Grotesk",
          animation: "shadowAnimation 2s infinite",
        }}
        href="#_"
        className="relative font-light inline-flex items-center justify-center px-6 py-3 overflow-hidden text-white border-[.2px] border-main_grey rounded-full shadow-2xl group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-r from-main_orange to-main_gold group-hover:opacity-100"></span>
        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
        <span className="relative" style={{ fontFamily: "Grotesk" }}>
          Access Toolkit
        </span>
      </a>
    </div>
  );
}

export default Hero;
