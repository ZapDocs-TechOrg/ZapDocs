import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { EmptyState } from "../components/empty-state";
import { HealthPanel } from "../components/health-panel";

export function DashboardPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-forest">Your workspace</p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-[42px]">A little more room to think.</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">Your documents will have a thoughtful home here.</p>
        </div>
        <Link to="/documents" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line bg-white px-4 text-sm font-semibold text-ink transition-colors hover:border-forest/30 hover:bg-mint">
          View documents <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
        <section aria-labelledby="recent-documents-title" className="min-w-0">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <h2 id="recent-documents-title" className="text-base font-semibold text-ink">Recent documents</h2>
            <span className="text-xs text-muted">0 items</span>
          </div>
          <div className="mt-3 rounded-xl border border-dashed border-[#d8e0d9] bg-white/70">
            <EmptyState
              icon={FileText}
              title="Your workspace is ready"
              description="Documents will appear here when they are added to your workspace."
            />
          </div>
        </section>
        <aside className="space-y-4">
          <HealthPanel />
          <div className="rounded-xl bg-[#eaf1e9] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-forest">A fresh start</p>
            <p className="mt-2 font-display text-xl leading-7 text-ink">Everything in its right place.</p>
            <p className="mt-2 text-sm leading-6 text-muted">Your document workspace is set up and ready for what comes next.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
