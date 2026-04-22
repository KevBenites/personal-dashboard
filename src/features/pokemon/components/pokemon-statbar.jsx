export function PokemonStatBar({ statBarLabel, statBarValue }) {
  const statColors = {
    hp: 'bg-green-500',
    attack: 'bg-red-500',
    defense: 'bg-blue-500',
    speed: 'bg-yellow-400',
    'special-attack': 'bg-pink-500',
    'special-defense': 'bg-cyan-400',
  };

  const color = statColors[statBarLabel] || 'bg-gray-400';

  return (
    <div>
      <div className="flex justify-between text-xs mb-1 capitalize">
        <span>{statBarLabel}</span>
        <span>{statBarValue}</span>
      </div>

      <div className="w-full bg-white/10 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${Math.min(statBarValue, 100)}%` }}
        />
      </div>
    </div>
  );
}
