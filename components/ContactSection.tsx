export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0F172A] px-6 py-20 md:px-16 lg:px-24">
      <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center gap-8">

        <div>
          <h2 className="text-3xl font-bold text-white mb-6 md:text-4xl">
            تواصل معي
          </h2>
          <div className="w-16 h-1 bg-white/30 mx-auto rounded-full" />
        </div>

        <p className="text-[#94A3B8] text-lg">
          هل لديك مشروع أو فرصة تعاون؟ يسعدني التواصل معك.
        </p>

        <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-center">

          {/* البريد الإلكتروني */}
          <a
            href="mailto:omaralsaeeeed@gmail.com"
            className="flex items-center justify-center gap-3 bg-white text-[#0F172A] font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-[#E5E7EB] hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            راسلني على الإيميل
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/omaralsaeeeed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-white text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-white hover:text-[#0F172A] hover:scale-105 active:scale-95"
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
