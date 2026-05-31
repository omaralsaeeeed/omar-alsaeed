export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0f0f0f] px-6 py-24 md:px-12 border-t border-white/5">
      <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center gap-8">

        <p className="text-white/30 text-xs tracking-widest uppercase">About</p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          نبذة عني
        </h2>

        <div className="w-8 h-px bg-white/20" />

        <p className="text-white/60 text-lg leading-loose">
          متخصص في العلاقات العامة والاتصال المؤسسي، أمتلك خبرة في بناء الاستراتيجيات
          الإعلامية وإدارة السمعة للمؤسسات والجهات الحكومية. أعمل على تعزيز الحضور
          المؤسسي وتطوير رسائل تواصلية فاعلة تُرسّخ الثقة وتُحقق الأثر المطلوب.
        </p>

      </div>
    </section>
  );
}
