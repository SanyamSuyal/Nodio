export function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-7 md:px-8 lg:px-12">
        <p className="text-xs uppercase tracking-[0.22em] text-[#7d7d7d]">© {new Date().getFullYear()} Nodio</p>
        <a
          href="https://github.com/SanyamSuyal/Nodio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.22em] text-[#7d7d7d] transition-colors hover:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
