const logos = [
  { src: "https://images.unsplash.com/photo-1687524577842-bc0f449e4ea0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOQUFDfGVufDB8MHx8fDE3NjM3MDczMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", alt: "NAAC" },
  { src: "https://images.unsplash.com/photo-1687524577842-bc0f449e4ea0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOQUFDfGVufDB8MHx8fDE3NjM3MDczMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", alt: "NBA" },
  { src: "https://images.unsplash.com/photo-1687524577842-bc0f449e4ea0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOQUFDfGVufDB8MHx8fDE3NjM3MDczMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", alt: "UGC" },
  { src: "https://images.unsplash.com/photo-1687524577842-bc0f449e4ea0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOQUFDfGVufDB8MHx8fDE3NjM3MDczMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", alt: "TCS" },
  { src: "https://images.unsplash.com/photo-1687524577842-bc0f449e4ea0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOQUFDfGVufDB8MHx8fDE3NjM3MDczMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", alt: "Infosys" },
  { src: "https://images.unsplash.com/photo-1687524577842-bc0f449e4ea0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOQUFDfGVufDB8MHx8fDE3NjM3MDczMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80", alt: "Wipro" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", alt: "IBM" },
];

export default function LogoStrip() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFDF7] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAFDF7] to-transparent z-10" />
      <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-10 animate-[scroll_30s_linear_infinite] will-change-transform">
          {[...logos, ...logos].map((l, i) => (
            <img key={i} src={l.src} alt={l.alt} className="h-10 w-auto opacity-80 hover:opacity-100 transition" />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
