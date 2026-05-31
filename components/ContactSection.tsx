export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0f0f0f] px-6 py-24 md:px-12 border-t border-white/5">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-10 text-center">

        <div>
          <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">تواصل معي</h2>
          <p className="mt-3 text-white/40 text-sm">
            هل لديك مشروع أو فرصة تعاون؟ يسعدني التواصل.
          </p>
        </div>

        <div className="w-8 h-px bg-white/20" />

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <a
            href="mailto:omaralsaeeeed@gmail.com"
            className="flex items-center justify-center gap-3 bg-white text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-all hover:bg-white/90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            راسلني
          </a>

          <a
            href="https://linkedin.com/in/omaralsaeeeed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-white/15 text-white/70 px-8 py-4 text-sm tracking-widest uppercase transition-all hover:border-white/40 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}
