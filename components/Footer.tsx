export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 px-6 py-8 md:px-12">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-2 text-center">
        <span className="text-white/20 text-xs tracking-widest uppercase">
          Omar Alsaeed · Public Relations
        </span>
        <p className="text-white/10 text-xs">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
