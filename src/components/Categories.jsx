import { Cpu, Cog, Laptop, FlaskConical, Scale, Brain, ScrollText } from "lucide-react";

const rawCourses = [
  "M.Tech. in Computer Science Engg.",
  "M.Tech. in Agriculture Engineering",
  "M.Tech. in Biomedical Engineering",
  "M.Tech. in Biotechnology",
  "MCA (28th Batch)",
  "MCA in Full Stack Development",
  "MCA in Cloud Computing",
  "MCA in Data Science & Machine Intelligence",
  "MCA in Internet of Things",
  "MCA in Network & Information Security",
  "PG Diploma in Yoga",
  "PG Diploma in Counseling Psychology",
  "LL.B. (3 Yrs)",
  "LL.M. (1 Years)",
  "LL.M. (2 Years)",
  "MBA Plus in Agri-Business & Rural Entrepreneurship",
  "MBA Plus in Digital Business & Ai",
  "MBA Plus in Global Trade & Logistics Management",
  "MBA Plus in Fintech, Banking & Insurance",
  "MBA Plus in People Management & Hr Analytics",
  "MBA Plus in Pharmaceutical & Healthcare Management",
  "MBA Plus in Marketing & E-Commerce",
  "MBA in Finance",
  "MBA in Marketing",
  "MBA in HR Management",
  "MBA in Agri-Business Management",
  "MBA in Pharmaceutical Management",
  "M.Sc. in Artificial Intelligence",
  "M.Sc. in Bio-Informatics",
  "M.Sc. in Biomedical Science",
  "M.Sc. in Biotechnology",
  "M.Sc. in Clinical Research",
  "M.Sc. in Cyber Security",
  "M.Sc. in Data Science",
  "M.Sc. in Food Science & Technology",
  "M.Sc. in Mathematics",
  "M.Sc. in Medical Physics",
  "M.Sc. in Microbiology",
];

const groups = [
  {
    key: "engineering",
    title: "Engineering",
    icon: Cog,
    match: ["M.Tech.", "Engineering"]
  },
  {
    key: "management",
    title: "Management & MBA",
    icon: BriefcaseIcon,
    match: ["MBA", "Management"]
  },
  {
    key: "it",
    title: "Computer Applications & IT",
    icon: Laptop,
    match: ["MCA", "Cloud", "Data", "Internet of Things", "Cyber", "Network"]
  },
  {
    key: "science",
    title: "Science & Research",
    icon: FlaskConical,
    match: ["M.Sc.", "Research", "Science", "Biotechnology", "Physics", "Microbiology", "Mathematics"]
  },
  {
    key: "law",
    title: "Law",
    icon: Scale,
    match: ["LL.B", "LL.M"]
  },
  {
    key: "psychology",
    title: "Psychology & Yoga",
    icon: Brain,
    match: ["Psychology", "Yoga"]
  },
  {
    key: "diploma",
    title: "Diploma Programs",
    icon: ScrollText,
    match: ["Diploma"]
  }
];

function BriefcaseIcon(props){
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
      <path d="M2 13h20"></path>
    </svg>
  )
}

const categorize = () => {
  const result = groups.map(g => ({ ...g, items: [] }));
  rawCourses.forEach(course => {
    const g = result.find(cat => cat.match.some(m => course.includes(m)));
    if (g) g.items.push(course);
  });
  return result;
};

function CategoryCard({ icon: Icon, title, items }){
  return (
    <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-sm">
          <Icon className="w-5 h-5" />
        </div>
        <div className="font-jakarta font-semibold text-slate-900">{title}</div>
      </div>
      <div className="flex flex-wrap gap-2 max-h-40 overflow-auto pr-1">
        {items.map((it, i) => (
          <span key={i} className="text-sm font-dm px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Categories(){
  const data = categorize();
  return (
    <div className="mt-6">
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map(cat => (
          <CategoryCard key={cat.key} icon={cat.icon} title={cat.title} items={cat.items} />
        ))}
      </div>

      <div className="sm:hidden -mx-4 px-4 overflow-x-auto">
        <div className="flex gap-4 w-max pr-4">
          {data.map(cat => (
            <div key={cat.key} className="w-72 flex-shrink-0">
              <CategoryCard icon={cat.icon} title={cat.title} items={cat.items} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
