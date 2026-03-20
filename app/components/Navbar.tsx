import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#222] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8 lg:px-12">
        <a href="#top" className="fade-in" aria-label="Nodio home">
          <Image src="/logo.svg" alt="Nodio" width={150} height={42} priority />
        </a>

        <nav className="fade-in fade-delay-1 hidden items-center gap-8 text-sm md:flex">
          <a href="#how-it-works" className="text-[#888] transition-colors hover:text-white">
            How it works
          </a>
          <a href="#contribute" className="text-[#888] transition-colors hover:text-white">
            Contribute
          </a>
        </nav>

        <a
          href="#waitlist"
          className="fade-in fade-delay-2 rounded-md border border-[#2a2a2a] px-4 py-2 text-sm text-white transition-colors hover:bg-[#141414]"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
