export const getPokemon = async (limit, offset) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );

  if (!response) {
    throw new Error('No se pudo traer datos de los pokemones');
  }

  return response.json();
};
