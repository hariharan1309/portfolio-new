import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background text-foreground">
      <div className="font-mono text-xs text-[var(--accent-hero)] uppercase tracking-widest mb-2">
        ERROR // 404 NOT FOUND
      </div>
      <h1 className="font-display text-8xl md:text-9xl font-bold uppercase tracking-tight">
        404
      </h1>
      <p className="text-muted-foreground font-mono text-sm max-w-md my-6">
        The requested chapter or panel does not exist in the archive.
      </p>
      <Link
        href="/"
        className="btn-tactile px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider"
      >
        Return to Cover // Index
      </Link>
    </div>
  );
}
