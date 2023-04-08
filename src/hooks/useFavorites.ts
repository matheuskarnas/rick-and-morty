import axios from "axios";
import { useQuery } from "react-query";

type CharacterData = {
	id: number;
	name: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	url: string;
};

type useQueryResponse = CharacterData[];

async function fetchFavorites(favorites: string): Promise<useQueryResponse> {
	if (favorites === "") {
		return [];
	}
	const data = axios
		.get(`https://rickandmortyapi.com/api/character/${favorites},`)
		.then(response => response.data);

	return data;
}

export const useFavorites = (favorites: string) => {
	return useQuery(["favorites", favorites], () => fetchFavorites(favorites));
};
