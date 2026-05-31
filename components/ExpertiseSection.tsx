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
    <section id="expertise" className="bg-white px-6 py-24 md:px-12 lg:px-20 border-b border-black/10">
      <div className="w-full max-w-6xl mx-auto">

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-16">
          <p className="text-sm font-medium text-[#888] tracking-widest uppercase">Expertise</p>
          <h2 className="text-4xl font-black text-black md:text-5xl text-right">
            مجالات الخبرة
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-black/10 md:grid-cols-2 md:divide-y-0">
          {expertise.map((item, i) => (
            <div
              key={item.number}
              className={`py-10 text-right group cursor-default ${
                i % 2 === 0 ? "md:border-l md:border-black/10 md:pl-12" : "md:pr-12"
              } ${i < 2 ? "md:border-b md:border-black/10 md:pb-12" : "md:pt-12"}`}
            >
              <span className="text-xs font-bold text-[#bbb] tracking-widest">{item.number}</span>
              <h3 className="text-2xl font-black text-black mt-3 mb-4 group-hover:underline transition-all">
                {item.title}
              </h3>
              <p className="text-[#666] text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
