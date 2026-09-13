import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { Technology } from "../types/technology";

interface TechnologySectionProps {
  technologies: Technology[];
  stack: Technology[];
  loading: boolean;
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function TechnologySection({
  technologies,
  stack,
  loading,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologySectionProps) {
  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-16 text-center">
        <p className="text-lg text-slate-500">
          Loading technologies...
        </p>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-5 py-12"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Explore{" "}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isAdded={stack.some(
                (item) => item.id === technology.id
              )}
              onAdd={onAdd}
            />
          ))}
        </div>

        {/* Your Stack */}
        <div className="lg:pl-2">
          <YourStack
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}