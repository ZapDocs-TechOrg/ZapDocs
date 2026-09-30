import type { LucideIcon } from "lucide-react";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center px-6 py-12 text-center">
      <div className="grid size-14 place-items-center rounded-2xl bg-mint text-forest">
        <Icon className="size-6" strokeWidth={1.7} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-muted">{description}</p>
    </div>
  );
}
