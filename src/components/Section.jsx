import TrustCards from "./TrustCards";
import LogoStrip from "./LogoStrip";
import Categories from "./Categories";

export default function Section(){
  return (
    <section className="relative py-14 sm:py-18" style={{ backgroundColor: "#FAFDF7" }}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(15,23,42,0.06),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-jakarta">Leading Specializations & Programs</h2>
        </div>

        <TrustCards />

        <div className="mt-10">
          <LogoStrip />
        </div>

        <Categories />
      </div>
    </section>
  );
}
