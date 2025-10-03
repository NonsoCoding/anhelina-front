import { Brain, Rocket, Globe } from "lucide-react";

const MeetAnhelina = () => {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-gray-900">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        {/* Top heading */}
        <div className="flex flex-col gap-6 items-center mb-12 md:mb-16">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center">
            Meet Anhelina
          </p>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl text-center">
            Anhelina is a next generation AI assistant designed to be safe,
            accurate, and intuitive. From helping you brainstorm creative ideas
            to simplifying complex tasks, Anhelina is built to make your work
            smarter, faster, and more inspiring.
          </p>
        </div>

        {/* Image + cards */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* Image */}
          <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
            <img
              src="/AboutImg.jpg"
              alt="Meet Anhelina"
              className="w-full max-w-[400px] h-[250px] md:h-[300px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
            <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <Brain className="text-white mb-4" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">
                Smart & Reliable
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Trained with advanced models, Anhelina delivers accurate and safe
                answers you can trust.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <Rocket className="text-white mb-4" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">
                Boost Productivity
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Whether it’s writing, coding, or planning, Anhelina adapts to your
                workflow seamlessly.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow sm:col-span-2">
              <Globe className="text-white mb-4" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">
                Always Accessible
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Available anytime, anywhere — ready to support your projects and
                ideas across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetAnhelina;
