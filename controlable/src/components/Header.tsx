import logo from 'assets/logo.png'

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 ">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between bg-inherit px-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Controlable logo" className="size-6" />
          <span className="text-sm font-semibold ">Controlable</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm md:flex"></nav>
        <div className="flex items-center gap-3">
          <button
            id="themeToggle"
            className="rounded-lg p-2 text-white transition duration-500 ease-in-out
             hover:scale-110 hover:shadow-[0_0_8px_#fff,0_0_16px_#fff]
             dark:text-blue-400 dark:hover:shadow-[0_0_4px_#0ff,0_0_10px_#0ff]"
            type="button"
          >
            <svg
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="sun-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="moon-icon hidden"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
