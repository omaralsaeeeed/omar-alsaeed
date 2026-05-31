const expertise = [
  {
    icon: "🤝",
    title: "العلاقات العامة",
    desc: "بناء علاقات مؤسسية متينة وتطوير استراتيجيات تواصل فعّالة مع الجمهور المستهدف.",
  },
  {
    icon: "🏛️",
    title: "الاتصال المؤسسي",
    desc: "صياغة الرسائل المؤسسية وإدارة قنوات التواصل الداخلي والخارجي بأسلوب احترافي.",
  },
  {
    icon: "⭐",
    title: "إدارة السمعة المؤسسية",
    desc: "حماية الصورة المؤسسية وتعزيزها من خلال خطط استراتيجية استباقية وأزمات محكمة.",
  },
  {
    icon: "📡",
    title: "التواصل الإعلامي",
    desc: "إدارة العلاقة مع الإعلام وإعداد المواد الصحفية والتصريحات الرسمية بدقة عالية.",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-[#E5E7EB] px-6 py-20 md:px-16 lg:px-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6 md:text-4xl">
            مجالات الخبرة
          </h2>
          <div className="w-16 h-1 bg-[#0F172A] mr-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 text-right shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-[#0F172A] font-bold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
