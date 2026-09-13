import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="card-shadow flex min-h-51.25 flex-col rounded-xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-8 w-8 object-contain"
          loading="lazy"
        />
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-3 text-[14px] font-bold text-slate-900">{technology.name}</h3>

      <p className="mt-1.5 line-clamp-3 min-h-11.25 text-[10px] leading-4 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[9px]">
        <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
          {technology.category}
        </span>
        <span className="text-slate-500">{technology.difficulty}</span>
        <span className="font-semibold text-slate-600">★ {technology.rating}</span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-3 w-full rounded-md px-3 py-2 text-[10px] font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}