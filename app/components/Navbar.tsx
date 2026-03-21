import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1f1f1f] bg-[#0a0a0a]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8 lg:px-12">
        <a href="#top" className="reveal-on-scroll is-visible" aria-label="Nodio home">
          <Image src="/logo.svg" alt="Nodio" width={150} height={42} priority />
        </a>

        <nav className="reveal-on-scroll reveal-delay-1 is-visible hidden items-center gap-8 text-sm md:flex">
          <a href="#how-it-works" className="text-[#b5b5b5] transition-colors hover:text-white">
            How it works
          </a>
          <a href="#contribute" className="text-[#b5b5b5] transition-colors hover:text-white">
            Contribute
          </a>
        </nav>

        <a
          href="#waitlist"
          className="outlined-button reveal-on-scroll reveal-delay-2 is-visible px-4 py-2 text-sm"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
