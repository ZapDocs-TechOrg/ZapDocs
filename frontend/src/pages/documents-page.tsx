import { FileText } from "lucide-react";
import { EmptyState } from "../components/empty-state";

export function DocumentsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="border-b border-line pb-6">
        <p className="text-sm font-medium text-forest">Workspace</p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-ink">Documents</h1>
        <p className="mt-3 text-sm leading-6 text-muted">A clear view of the documents in your workspace.</p>
      </div>
      <section aria-label="Document list" className="mt-6 rounded-xl border border-dashed border-[#d8e0d9] bg-white/70">
        <EmptyState
          icon={FileText}
          title="No documents yet"
          description="When documents are part of your workspace, they will be collected here."
        />
      </section>
    </div>
  );
}
