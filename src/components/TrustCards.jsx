import { Award, Briefcase, Layers } from "lucide-react";

function TrustCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-5">
      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <div className="text-slate-900 font-semibold font-jakarta leading-tight">{title}</div>
        {subtitle && <div className="text-slate-600 text-sm truncate">{subtitle}</div>}
      </div>
    </div>
  );
}

export default function TrustCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <TrustCard icon={Award} title="Ranked Excellence" subtitle="Research, teaching & innovation" />
      <TrustCard icon={Briefcase} title="Top Placement Record" subtitle="Strong industry outcomes" />
      <TrustCard icon={Layers} title="Leading Specializations" subtitle="Future-ready programs" />
    </div>
  );
}
