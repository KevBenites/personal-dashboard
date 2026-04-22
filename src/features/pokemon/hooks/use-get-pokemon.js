import { useEffect, useState } from 'react';
import { getPokemon } from '../services/get-pokemon';
import { useSearchParams } from 'react-router';
import { getPokemonDetails } from '../services/get-pokemon-details';

export const useGetPokemon = () => {
  const [pokemones, setPokemones] = useState([]);
  const [totalPokemones, setTotalPokemones] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const [searchParams] = useSearchParams();

  const limit = searchParams.get('limit') || 60;
  const page = searchParams.get('page') || 1;

  const offset = (Number(page) - 1) * Number(limit);

  useEffect(() => {
    getPokemon(limit, offset)
      .then((data) => {
        setIsLoading(true);
        setPokemones([]);
        setTotalPokemones(data.count);

        return Promise.all(
          data.results.map((pokemon) => getPokemonDetails(pokemon.url)),
        );
      })
      .then((detalles) => {
        setPokemones(detalles);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [limit, offset]);

  return { pokemones, totalPokemones, isLoading, error };
};
