import { useSearchParams } from 'react-router';
import { Pagination } from '../../../common/components/pagination/pagination';
import { PokemonesGrid } from '../components/pokemones-grid';
import { useGetPokemon } from '../hooks/use-get-pokemon';

export function PokemonesPages() {
  const { pokemones, totalPokemones, isLoading, error } = useGetPokemon();
  const [searchParams] = useSearchParams();

  const limit = searchParams.get('limit');
  const limitNumber = Number(limit) || 50;

  const totalPages = Math.ceil(totalPokemones / limitNumber);

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
      <Pagination totalPages={totalPages} />
    </>
  );
}
