import { PokemonCard } from './pokemon-card';

export function PokemonesGrid({ pokemones, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center">
        <span className="text-3xl font-bold">Cargando pokemones...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center">
        <span className="text-3xl font-bold">{error.message}</span>
      </div>
    );
  }

  return (
    <div className="mx-auto w-[80%] py-2 max-h-160 flex flex-wrap gap-4 overflow-y-scroll">
      {pokemones.map((pokemon) => (
        <PokemonCard key={pokemon.name} poke={pokemon} />
      ))}
    </div>
  );
}
