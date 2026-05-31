export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white flex items-center px-6 pt-28 pb-16 md:px-12 lg:px-20 border-b border-black/10"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse items-center gap-16 md:flex-row md:justify-between">

        {/* النص */}
        <div className="flex-1 flex flex-col items-center text-center md:items-end md:text-right gap-8">
          <div>
            <p className="text-sm font-medium text-[#888] tracking-widest uppercase mb-4">
              Public Relations & Corporate Communication
            </p>
            <h1 className="text-5xl font-black text-black leading-tight md:text-6xl lg:text-7xl">
              عمر السعيد
            </h1>
            <p className="mt-4 text-xl text-[#444] font-medium md:text-2xl">
              متخصص في العلاقات العامة
              <br />
              والاتصال المؤسسي
            </p>
          </div>

          <p className="text-[#666] text-base leading-relaxed max-w-md md:text-lg">
            أبني جسور التواصل بين المؤسسات وجمهورها،
            وأصنع الأثر من خلال رسائل واضحة وموثوقة.
          </p>

          <a
            href="#contact"
            className="inline-block bg-black text-white font-bold px-10 py-4 text-base transition-all duration-200 hover:bg-[#222] hover:scale-105 active:scale-95"
          >
            تواصل معي
          </a>
        </div>

        {/* الصورة */}
        <div className="flex-shrink-0">
          <div className="w-52 h-52 md:w-72 md:h-72 lg:w-88 lg:h-88 overflow-hidden grayscale">
            <img
              src="/profile.jpg"
              alt="عمر السعيد"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
