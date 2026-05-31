export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10 px-6 py-6 text-center">
      <p className="text-[#64748B] text-sm">
        © {new Date().getFullYear()} عمر السعيد. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}
