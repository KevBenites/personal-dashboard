export function PokemonInfo({ label, value }) {
  return (
    <div className="bg-black/30 rounded-xl p-3">
      <p className="text-white/60 text-xs">{label}</p>
      <p className="font-semibold capitalize">{value}</p>
    </div>
  );
}
