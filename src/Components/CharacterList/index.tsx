import * as S from "./styles";

import { useEffect, useState } from "react";
import { useFind } from "../../hooks/useFind";
import { CardOfCharacter } from "../CardOfCharacter";
import { Pagination } from "../Pagination";
import { useRouter } from "next/router";

type CharacterListProps = {
	slug: string;
};

function getCurrentPage(slug: string) {
	const index = slug.indexOf("page=");
	const finalIndex = slug.indexOf("&", index);

	if (index === -1) {
		return 1;
	}

	if (index !== -1 && finalIndex !== -1) {
		const currentPage = Number(slug.substring(index + 5, finalIndex));
		return currentPage;
	}

	const currentPage = Number(slug.substring(index + 5, slug.length));
	return currentPage;
}

export const CharacterList = ({ slug }: CharacterListProps) => {
	const [favoritesCharactersCache, setFavoritesCharactersCache] = useState<
		number[]
	>([]);
	const [currentPage, setCurrentPage] = useState(getCurrentPage(slug));
	const { data, isLoading, error } = useFind(slug);
	const router = useRouter();

	function handleSubmit(newPage?: number) {
		if (!newPage) {
			return;
		}

		setCurrentPage(newPage);

		if (data && (1 > newPage || newPage > data.info.pages)) {
			return alert(`Insira um valor entre 1 e ${data.info.pages}`);
		}

		const index = slug.indexOf("page=");

		if (index === -1) {
			if (slug.indexOf("/?") !== -1) {
				router.push(slug.replace(`/?`, `/?page=${newPage}&`));
				return;
			}
			router.push(slug.replace(`/`, `/?page=${newPage}`));
			return;
		}

		router.push(slug.replace(`page=${currentPage}`, `page=${newPage}`));
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
			<Pagination
				info={data?.info}
				currentPage={currentPage}
				handleSubmit={handleSubmit}
			/>
			<S.Grid>
				{data?.results.map(character => (
					<CardOfCharacter
						key={character.id}
						character={character}
						favoritesCharactersCache={favoritesCharactersCache}
						addNewFavorite={addNewFavorite}
						removeFavorite={removeFavorite}
					/>
				))}
			</S.Grid>
		</>
	);
};
