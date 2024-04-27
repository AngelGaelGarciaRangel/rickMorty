'use client';
import { Character } from "./components/Character";
import { useEffect, useState } from "react";
import { getCharacters } from "../../services/characterServices";

interface CharacterType {
    id: number;
    name: string;
    status: string;
    species: string;
    location: string;
    image: string;
}

export default function Home() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const characters = await getCharacters();
            setCharacters(characters);
            console.log(characters);
        };
        fetchData();
    }, []);

    return (
        <div className="bg-customDarkBack w-full h-screen p-4">
            <h1 className="text-4xl font-bold text-center">All the characters from Rick and Morty</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {characters.map((x) => {
                    return <Character key={x.id} character={x} isFavorite={false} />;
                })}
            </div>
        </div>
    );
}
