const expertise = [
  {
    number: "01",
    title: "العلاقات العامة",
    desc: "بناء علاقات مؤسسية متينة وتطوير استراتيجيات تواصل فعّالة مع الجمهور المستهدف.",
  },
  {
    number: "02",
    title: "الاتصال المؤسسي",
    desc: "صياغة الرسائل المؤسسية وإدارة قنوات التواصل الداخلي والخارجي بأسلوب احترافي.",
  },
  {
    number: "03",
    title: "إدارة السمعة",
    desc: "حماية الصورة المؤسسية وتعزيزها من خلال خطط استراتيجية استباقية ومحكمة.",
  },
  {
    number: "04",
    title: "التواصل الإعلامي",
    desc: "إدارة العلاقة مع الإعلام وإعداد المواد الصحفية والتصريحات الرسمية بدقة عالية.",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-[#0a0a0a] px-6 py-24 md:px-12 border-t border-white/5">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-12">

        <div className="text-center">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Expertise</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">مجالات الخبرة</h2>
        </div>

        <div className="w-full divide-y divide-white/5">
          {expertise.map((item) => (
            <div
              key={item.number}
              className="flex items-start gap-6 py-8 text-right group"
            >
              <span className="text-white/20 text-xs font-bold tracking-widest mt-1 flex-shrink-0">
                {item.number}
              </span>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-white/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
