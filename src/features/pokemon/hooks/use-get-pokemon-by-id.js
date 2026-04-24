import { useEffect, useState } from 'react';
import { getPokemonById } from '../services/get-pokemon-by-id';

export const useGetPokemonById = (id) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getPokemonById(id)
      .then(setPokemon)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { pokemon, isLoading, error };
};
