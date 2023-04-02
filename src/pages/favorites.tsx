import { CardOfCharacter } from "@/Components/CardOfCharacter";
import { useEffect, useState } from "react";
import { useFavorites } from "../hooks/useFavorites";

export default function Favorites() {
	const [favoritesCharactersCache, setFavoritesCharactersCache] = useState<
		number[]
	>([]);
	const [favorites, setFavorites] = useState("");
	const { data, isLoading, error } = useFavorites(favorites);
	console.log("Favorites", data);

	function makeString() {
		const newString = favoritesCharactersCache.join();
		setFavorites(newString);
	}

	const getCacheDate = () => {
		const response = localStorage.getItem("favoritesCharacters");
		if (response) {
			const responseArray = JSON.parse(response);
			setFavoritesCharactersCache(responseArray);
		} else {
			setFavoritesCharactersCache([]);
		}
	};

	const addNewFavorite = (id: number) => {
		const newArr = favoritesCharactersCache || [];
		newArr.push(id);
		localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
		getCacheDate();
	};

	const removeFavorite = (id: number) => {
		const newArr = favoritesCharactersCache || [];
		const index = newArr.indexOf(id);
		if (index > -1) {
			newArr.splice(index, 1);
			localStorage.setItem("favoritesCharacters", JSON.stringify(newArr));
		}
		getCacheDate();
	};

	useEffect(() => {
		makeString();
	}, [favoritesCharactersCache]);

	useEffect(() => {
		getCacheDate();
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>Error</h1>;
	}

	return (
		<>
			<h1>oi</h1>;
			{!data || data?.length === 0 ? (
				<div>sem personagens salvos</div>
			) : (
				data?.map(character => (
					<CardOfCharacter
						key={character.id}
						character={character}
						favoritesCharactersCache={favoritesCharactersCache}
						addNewFavorite={addNewFavorite}
						removeFavorite={removeFavorite}
					/>
				))
			)}
		</>
	);
}
