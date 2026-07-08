import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-6xl">🥪</span>
      <h1 className="mt-6 font-heading text-4xl font-extrabold text-dark">Page Not Found</h1>
      <p className="mt-3 max-w-md font-body text-dark/60">
        Looks like this page got eaten. Let&apos;s get you back to something delicious.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-warm-gradient px-8 py-4 font-heading font-bold text-white shadow-glow transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
