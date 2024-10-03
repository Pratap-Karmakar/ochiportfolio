import { IoArrowForwardCircleOutline } from "react-icons/io5"

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-zinc-900 text-white">
      <main className="flex-grow flex items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl text-[#FFF0D1] md:text-6xl lg:text-7xl font-bold uppercase">
            <span className="block">Transforming Concepts</span>
            <span className="block font-semibold">into seamless</span>
            <span className="block text-[#FFEB55] md:text-8xl pt-4">user experiences</span>
          </h1>
        </div>
      </main>

      <footer className="mt-auto border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              Naiyo24, Innovating Tomorrow, <span className="text-purple-400">Today.</span>
            </p>
            <p className="text-sm text-gray-300">
              Building the Future, One Line of Code at a Time.
            </p>
            <button className="group py-2 px-6 border border-zinc-700 rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300 hover:border-zinc-500 hover:bg-[#FAF7F0] hover:text-black">
              <span>Start the Project</span>
              <IoArrowForwardCircleOutline className="text-zinc-600 text-2xl transition-all duration-300 group-hover:text-zinc-400 group-hover:translate-x-1 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}