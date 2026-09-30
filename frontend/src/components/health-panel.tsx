import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useHealth } from "../hooks/use-health";

export function HealthPanel() {
  const { data, isPending, isError, error, refetch, isFetching } = useHealth();

  return (
    <section aria-labelledby="connection-title" className="rounded-xl border border-line bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">System status</p>
          <h2 id="connection-title" className="mt-2 text-base font-semibold text-ink">API connection</h2>
        </div>
        {isPending ? (
          <LoaderCircle className="size-5 animate-spin text-muted" aria-label="Checking API connection" />
        ) : isError ? (
          <AlertCircle className="size-5 text-amber" aria-label="API connection failed" />
        ) : (
          <CheckCircle2 className="size-5 text-emerald-700" aria-label="API connection healthy" />
        )}
      </div>
      <p aria-live="polite" className="mt-4 text-sm leading-6 text-muted">
        {isPending && "Checking the ZapDocs service…"}
        {isError && error.message}
        {data && `Connected to ${data.service}.`}
      </p>
      {isError && (
        <Button className="mt-3 min-h-9 px-3 text-xs" onClick={() => void refetch()} variant="quiet" disabled={isFetching}>
          {isFetching ? "Retrying…" : "Try again"}
        </Button>
      )}
    </section>
  );
}
