export const getPokemonById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response) {
    throw new Error('No se pudo traer datos del pokemon');
  }

  return response.json();
};
