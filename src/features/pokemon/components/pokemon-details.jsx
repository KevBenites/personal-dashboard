import { ArrowLeft } from 'lucide-react';

import { PokemonInfo } from './pokemon-info';
import { PokemonStatBar } from './pokemon-statbar';

import { useLocation, useNavigate } from 'react-router';

export function PokemonDetails() {
  const typeColors = {
    fire: 'bg-red-500/30',
    water: 'bg-blue-500/30',
    grass: 'bg-green-500/30',
    electric: 'bg-yellow-400/30',
    psychic: 'bg-pink-400/30',
    ice: 'bg-cyan-300/30',
    dragon: 'bg-indigo-500/30',
    dark: 'bg-gray-700/40',
    fairy: 'bg-pink-300/40',
    normal: 'bg-gray-400/30',
  };

  const navigate = useNavigate();
  const { state } = useLocation();
  const poke = state.pokemon;

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-50 flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Volver</span>
      </button>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
        <img
          className="w-60 h-60 object-contain drop-shadow-xl"
          src={poke.sprites.other['official-artwork'].front_default}
          alt={poke.name}
        />

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold capitalize">{poke.name}</h1>
          <p className="text-white/60 mb-2"># {poke.id}</p>

          <div className="flex gap-2 justify-center md:justify-start">
            {poke.types.map((type) => (
              <span
                key={type.type.name}
                className={`px-3 py-1 rounded-full text-sm capitalize ${
                  typeColors[type.type.name] || 'bg-white/20'
                }`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Stats</h2>

        <div className="space-y-2">
          {poke.stats.map((stat) => (
            <PokemonStatBar
              key={stat.stat.name}
              statBarLabel={stat.stat.name}
              statBarValue={stat.base_stat}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <PokemonInfo label="Height" value={poke.height} />
        <PokemonInfo label="Weight" value={poke.weight} />
        <PokemonInfo
          label="Abilities"
          value={poke.abilities.map((a) => a.ability.name).join(', ')}
        />
      </div>
    </div>
  );
}
