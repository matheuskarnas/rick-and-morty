import axios from "axios";
import { useQuery } from "react-query";

type PageInfo = {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
};

type CharacterData = {
	id: number;
	name: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	url: string;
};

type useQueryResponse = {
	info: PageInfo;
	results: CharacterData[];
};

async function fetchPage(filters: string): Promise<useQueryResponse> {
	const data = axios
		.get(`https://rickandmortyapi.com/api/character/${filters}`)
		.then(res => res.data);

	return data;
}

export const useFind = (filters: string) => {
	return useQuery(["pageTrueee", filters], () => fetchPage(filters));
};
