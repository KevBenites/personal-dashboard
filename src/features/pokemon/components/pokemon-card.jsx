import { useNavigate } from 'react-router';
import { PokemonStat } from './pokemon-stats';

export function PokemonCard({ poke }) {
  const navigate = useNavigate();

  return (
    <div
      className="group cursor-pointer w-52 p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      onClick={() =>
        navigate('/pokemones/pokemon-details', {
          state: { pokemon: poke },
        })
      }
    >
      <h2 className="text-lg font-bold text-center capitalize mb-2">
        {poke.name}
      </h2>
      <div className="flex justify-center items-center mb-3">
        <img
          className="w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-110"
          src={poke.sprites.other['official-artwork'].front_default}
          alt={poke.name}
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <PokemonStat statLabel="HP" statValue={poke.stats[0].base_stat} />
        <PokemonStat statLabel="ATK" statValue={poke.stats[1].base_stat} />
        <PokemonStat statLabel="DEF" statValue={poke.stats[2].base_stat} />
        <PokemonStat statLabel="SPD" statValue={poke.stats[5].base_stat} />
      </div>
    </div>
  );
}
