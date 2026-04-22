export function PokemonStat({ statLabel, statValue }) {
  return (
    <div className="flex justify-between bg-black/30 text-sm rounded-lg px-2 py-1">
      <span className="text-white/60">{statLabel}</span>
      <span className="font-semibold">{statValue}</span>
    </div>
  );
}
