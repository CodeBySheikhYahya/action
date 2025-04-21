
export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-screen-xl mx-auto">
        {/* Name Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">
          Sheikh Yahya Khan
        </h1>

        {/* Instructions Box */}
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] bg-white/5 p-4 rounded-xl border border-white/10 shadow-md backdrop-blur-sm w-full max-w-md">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-white/10 px-1 py-0.5 rounded text-pink-400 font-mono">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        {/* Link to Hero Section */}
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 text-white font-semibold text-sm sm:text-base h-10 sm:h-12 px-6 shadow-md hover:scale-105 hover:shadow-xl"
            href="#hero"
          >
            Go to Hero Section
          </a>
        </div>
      </main>

      {/* Hero Section - this will be scrolled into view when the link is clicked */}
      <section id="hero" className="relative w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden px-6 sm:px-10">
        {/* Glow & Blur Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-pink-500 opacity-20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-yellow-400 opacity-20 rounded-full blur-[100px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-fade-in drop-shadow-xl">
            Welcome to Sheikh Yahya Khan’s World
          </h1>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-white/80 font-light tracking-wide leading-relaxed">
            Building modern full-stack experiences that hit hard, look clean, and perform like rockets. Let's craft something unforgettable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transition-all"
            >
              🚀 Start a Project
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              🧠 See My Work
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-white/80">
        <a className="hover:text-pink-400 transition" href="#">
          📘 About Me
        </a>
        <a className="hover:text-yellow-400 transition" href="#">
          💼 Projects
        </a>
        <a className="hover:text-cyan-400 transition" href="#">
          🌐 Connect
        </a>
      </footer>
    </div>
  );
}
