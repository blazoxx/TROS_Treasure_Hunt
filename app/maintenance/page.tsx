export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-black text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-red-950/20 via-black/60 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,20,20,0.15),transparent_55%)]" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-[0.5em] text-red-900/80 mb-4">
            System Locked
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-zinc-100 mb-6 tracking-tight">
            The Realm Is Under Maintenance
          </h1>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-10">
            The gates are sealed while the Watch repairs the wall. Return at the
            appointed hour.
          </p>
          <div className="inline-flex items-center gap-3 px-5 py-3 border border-red-950/50 bg-black/50 text-red-200 font-mono text-xs uppercase tracking-widest">
            We will return soon
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-900/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-900/50 to-transparent" />
    </main>
  );
}
