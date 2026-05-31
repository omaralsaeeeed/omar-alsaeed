export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-8">

        {/* الصورة */}
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/10">
          <img
            src="/profile.jpg"
            alt="عمر السعيد"
            className="w-full h-full object-cover"
          />
        </div>

        {/* خط فاصل */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/20 text-xs tracking-widest uppercase">PR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* الاسم والمسمى */}
        <div>
          <h1 className="text-5xl font-bold text-white tracking-tight md:text-6xl">
            عمر السعيد
          </h1>
          <p className="mt-3 text-white/50 text-base tracking-widest uppercase">
            متخصص · علاقات عامة · اتصال مؤسسي
          </p>
        </div>

        {/* النبذة */}
        <p className="text-white/60 text-base leading-relaxed max-w-sm md:text-lg">
          أبني جسور التواصل بين المؤسسات وجمهورها،
          وأصنع الأثر من خلال رسائل واضحة وموثوقة.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col gap-3 w-full max-w-xs sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="flex-1 text-center bg-white text-black font-bold px-8 py-3 text-sm tracking-widest uppercase transition-all hover:bg-white/90 hover:scale-105"
          >
            تواصل معي
          </a>
          <a
            href="#about"
            className="flex-1 text-center border border-white/20 text-white/70 px-8 py-3 text-sm tracking-widest uppercase transition-all hover:border-white/50 hover:text-white"
          >
            تعرف عليّ
          </a>
        </div>

      </div>
    </section>
  );
}
