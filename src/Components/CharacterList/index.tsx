import * as S from "./styles";

import { useState } from "react";
import { usePage } from "../../hooks/usePage";
import { CardOfCharacter } from "../CardOfCharacter";
import { Pagination } from "../Pagination";

export const CharacterList = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const { data, isLoading, error } = usePage(pageNumber);

	function handleSubmit(newPage?: number) {
		if (!newPage) {
			return;
		}

		if (data && (1 > newPage || newPage > data.info.pages)) {
			return alert(`Insira um valor entre 1 e ${data.info.pages}`);
		}
		setPageNumber(newPage);
	}

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>Error</h1>;
	}

	return (
		<>
			<S.Grid>
				{data?.results.map(character => (
					<CardOfCharacter key={character.id} character={character} />
				))}
			</S.Grid>
			<Pagination
				info={data?.info}
				currentPage={pageNumber}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};
