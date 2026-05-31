export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-8 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <span className="text-white font-black text-lg">عمر السعيد</span>
        <p className="text-[#555] text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
