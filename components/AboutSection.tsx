export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-24 md:px-12 lg:px-20 border-b border-black/10">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 md:flex-row md:gap-24">

        <div className="md:w-48 flex-shrink-0">
          <p className="text-sm font-medium text-[#888] tracking-widest uppercase">
            About
          </p>
        </div>

        <div className="flex-1 text-right">
          <h2 className="text-4xl font-black text-black mb-8 md:text-5xl">
            نبذة عني
          </h2>
          <p className="text-[#444] text-lg leading-loose md:text-xl">
            متخصص في العلاقات العامة والاتصال المؤسسي، أمتلك خبرة في بناء الاستراتيجيات
            الإعلامية وإدارة السمعة للمؤسسات والجهات الحكومية. أعمل على تعزيز الحضور
            المؤسسي وتطوير رسائل تواصلية فاعلة تُرسّخ الثقة وتُحقق الأثر المطلوب.
          </p>
        </div>

      </div>
    </section>
  );
}
