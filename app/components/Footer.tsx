export function Footer() {
  return (
    <footer className="border-t border-[#222]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-7 md:px-8 lg:px-12">
        <p className="font-mono-geist text-xs text-[#555]">© {new Date().getFullYear()} Nodio</p>
        <a
          href="https://github.com/SanyamSuyal/Nodio"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-geist text-xs text-[#555] transition-colors hover:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
