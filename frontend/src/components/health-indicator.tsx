import { useHealth } from "../hooks/use-health";

export function HealthIndicator() {
  const { data, isPending, isError, error } = useHealth();
  const label = isPending ? "Connecting to API" : isError ? "API unavailable" : "API connected";

  return (
    <div className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-muted" title={isError ? error.message : undefined}>
      <span
        aria-hidden="true"
        className={`size-2 rounded-full ${isPending ? "animate-pulse bg-amber" : isError ? "bg-red-500" : "bg-emerald-600"}`}
      />
      <span>{label}</span>
      {data && <span className="sr-only">{data.service}</span>}
    </div>
  );
}
