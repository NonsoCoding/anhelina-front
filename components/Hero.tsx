




const Hero = () => {
  return (
    <section className="w-full pt-10 md:pt-20 bg-gray-900">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <div>
            <p className="text-5xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-gray-400">Impossible?</span><br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Possible.
              </span>
            </p>
          </div>
          <p className="text-gray-400 text-lg">
            The AI for problem solvers — built to help you think smarter, faster, and bolder.
          </p>
          <div className="w-full md:w-[80%] bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col gap-4">
            <input
              className="w-full py-3 px-4 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              type="email"
              placeholder="Enter your email"
            />
            <button className="w-full py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition">
              Continue with Email
            </button>
            <p className="text-xs text-gray-500">
              By continuing, you acknowledge Anhelina’s Privacy Policy.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <video
            className="w-full max-w-[600px] rounded-2xl shadow-2xl"
            src="/Hero1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
