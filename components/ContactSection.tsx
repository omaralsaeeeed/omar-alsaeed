export default function ContactSection() {
  return (
    <section id="contact" className="bg-black px-6 py-24 md:px-12 lg:px-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

        <div className="text-right">
          <p className="text-sm font-medium text-[#666] tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl font-black text-white md:text-6xl">
            تواصل معي
          </h2>
          <p className="mt-4 text-[#888] text-lg">
            هل لديك مشروع أو فرصة تعاون؟
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row md:flex-col md:items-end">
          <a
            href="mailto:omaralsaeeeed@gmail.com"
            className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-base font-medium transition-all hover:bg-white hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            omaralsaeeeed@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/omaralsaeeeed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-base font-bold transition-all hover:bg-[#E5E7EB]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
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
