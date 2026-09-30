import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="grid min-h-[55vh] place-items-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-forest">404</p>
        <h1 className="mt-3 font-display text-3xl text-ink">This page isn't here.</h1>
        <Link className="mt-5 inline-flex text-sm font-semibold text-forest underline-offset-4 hover:underline" to="/">
          Return to your workspace
        </Link>
      </div>
    </main>
  );
}
