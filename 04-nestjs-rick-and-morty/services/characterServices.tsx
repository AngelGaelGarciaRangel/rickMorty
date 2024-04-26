'use server'

interface Character{
  id: number,
  name: string,
  status: string,
  species: string,
  location: string,
  image: string,
}

export const getCharacters = async (): Promise<Character[]> => {
  const url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);
  const responseParsed = await response.json();
  const characters: Character[] = responseParsed.results.map((data: any) => {
    return {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      location: data.location.name,
      image: data.image,
    }
  })
  console.log(characters);
  return characters;
};

export const getCharacter = async (characterId: String): Promise<Character> => {
  const url = "https://rickandmortyapi.com/api/character/" + characterId.toString();
  const response = await fetch(url);
  const responseParsed = await response.json();
  const character: Character = {
    id:  responseParsed.results.id,
    name: responseParsed.results.name,
    status: responseParsed.results.status,
    species: responseParsed.results.species,
    location: responseParsed.location.name,
    image: responseParsed.image,
  };
  console.log(character);
  return character;
};