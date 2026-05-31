export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0F172A] flex items-center px-6 pt-28 pb-16 md:px-16 lg:px-24"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">

        {/* النص - يظهر في الأسفل على الموبايل، على اليسار في الديسكتوب */}
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-right gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white leading-tight md:text-5xl lg:text-6xl">
              عمر السعيد
            </h1>
            <p className="mt-3 text-lg text-[#94A3B8] font-medium md:text-xl">
              متخصص في العلاقات العامة والاتصال المؤسسي
            </p>
          </div>

          <p className="text-[#CBD5E1] text-base leading-relaxed max-w-md md:text-lg">
            أبني جسور التواصل بين المؤسسات وجمهورها،
            <br />
            وأصنع الأثر من خلال رسائل واضحة وموثوقة.
          </p>

          <a
            href="#contact"
            className="mt-2 inline-block bg-white text-[#0F172A] font-bold px-8 py-3 rounded-full text-base transition-all duration-200 hover:bg-[#E5E7EB] hover:scale-105 active:scale-95"
          >
            تواصل معي
          </a>
        </div>

        {/* الصورة - تظهر في الأعلى على الموبايل، على اليمين في الديسكتوب */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 bg-[#1E293B] flex items-center justify-center">
            <span className="text-[#94A3B8] text-sm">الصورة الشخصية</span>
          </div>
        </div>

      </div>
    </section>
  );
}
