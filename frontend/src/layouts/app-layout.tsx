import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FileText, LayoutDashboard, Menu, X } from "lucide-react";
import { HealthIndicator } from "../components/health-indicator";
import { cn } from "../lib/utils";

const navigation = [
  { label: "Overview", to: "/", icon: LayoutDashboard, end: true },
  { label: "Documents", to: "/documents", icon: FileText, end: false },
];

export function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      {menuOpen && (
        <button className="fixed inset-0 z-30 bg-ink/30 lg:hidden" onClick={() => setMenuOpen(false)} aria-label="Close navigation" />
      )}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col border-r border-line bg-white px-5 py-6 transition-transform lg:translate-x-0",
        menuOpen ? "translate-x-0" : "-translate-x-full",
      )}>
        <div className="flex items-center justify-between px-1">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="grid size-9 place-items-center rounded-xl bg-forest text-white">
              <FileText className="size-5" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="font-display text-2xl text-ink">ZapDocs</span>
          </NavLink>
          <button className="grid size-9 place-items-center rounded-lg text-muted hover:bg-canvas lg:hidden" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted">Workspace</div>
        <nav aria-label="Main navigation" className="mt-3 space-y-1">
          {navigation.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => cn(
                "flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",
                isActive ? "bg-mint text-forest" : "text-muted hover:bg-canvas hover:text-ink",
              )}
            >
              <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t border-line pt-5">
          <div className="flex items-center gap-3 px-2">
            <div className="grid size-9 place-items-center rounded-full bg-[#f3e9dc] text-xs font-semibold text-[#805332]" aria-hidden="true">ZD</div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">Your workspace</p>
              <p className="truncate text-xs text-muted">Personal space</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-[248px]">
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-line bg-white/95 px-5 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <button className="grid size-9 place-items-center rounded-lg text-muted hover:bg-canvas lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open navigation">
              <Menu className="size-5" aria-hidden="true" />
            </button>
            <p className="hidden text-sm text-muted sm:block">A calmer place for your documents.</p>
          </div>
          <HealthIndicator />
        </header>
        <main className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
