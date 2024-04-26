import { Character } from "./components/Character";

interface CharacterType{
  id: number,
  name: string,
  status: string,
  species: string,
  location: string,
  image: string,
}

export default function Home() {
  const characterExample: CharacterType = {
    id : 1,
    name : "Gael",
    status : "Vivo",
    species : "Humano",
    location : "Monterrey",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Henry_Cavill_%2848417913146%29_%28cropped%29.jpg/440px-Henry_Cavill_%2848417913146%29_%28cropped%29.jpg"
  }
  return (
    <div className="bg-customDarkBack w-full h-screen p-4">
      <h1 className="text-4xl	font-bold text-center">All the characters from Rick and Morty</h1>
      <Character character={characterExample} isFavorite={false}/>
    </div>
  );
}
