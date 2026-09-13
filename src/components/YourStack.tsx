import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-4 shadow-sm lg:sticky lg:top-24">

      {/* Header */}
      <div>
        <h2 className="text-sm font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[10px] text-slate-400">
          {stack.length}{" "}
          {stack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      </div>

      {/* Empty Stack */}
      {stack.length === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-slate-200 px-4 py-8 text-center">
          <p className="text-[11px] font-medium text-slate-500">
            Your stack is empty.
          </p>

          <p className="mt-1 text-[9px] leading-4 text-slate-400">
            Add technologies to build your ideal stack.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-4 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-3"
              >
                {/* Icon */}
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 shrink-0 object-contain"
                />

                {/* Name + Category */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-bold text-slate-800">
                    {technology.name}
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-sm text-slate-300 transition hover:bg-rose-50 hover:text-rose-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All - Bottom */}
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-slate-200 py-2.5 text-[10px] font-semibold text-pink-600 transition hover:border-pink-200 hover:bg-pink-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}