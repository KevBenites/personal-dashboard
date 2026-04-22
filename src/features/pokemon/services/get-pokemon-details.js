export const getPokemonDetails = async (url) => {
  const response = await fetch(url);

  if (!response) {
    throw new Error('No se pudo traer datos del pokemon');
  }

  return response.json();
};
