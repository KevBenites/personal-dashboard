import { Pagination } from '../../../common/components/pagination/pagination';
import { PokemonesGrid } from '../components/pokemones-grid';
import { useGetPokemon } from '../hooks/use-get-pokemon';

export function PokemonesPages() {
  const { pokemones, totalPokemones, isLoading, error } = useGetPokemon();

  return (
    <>
      <h1 className="text-4xl text-center font-bold mb-7">
        Lista de Pokemones
      </h1>
      <PokemonesGrid
        pokemones={pokemones}
        isLoading={isLoading}
        error={error}
      />
      <Pagination totalPokemones={totalPokemones} />
    </>
  );
}
