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

async function fetchPage(page: number): Promise<useQueryResponse> {
	const data = axios
		.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
		.then(response => response.data);

	return data;
}

export const usePage = (page: number) => {
	return useQuery(["page", page], () => fetchPage(page));
};
