import { useState } from "react";
import * as S from "./styles";

type PageInfo =
	| {
			count: number;
			pages: number;
			next: string | null;
			prev: string | null;
	  }
	| undefined;

type PaginationProps = {
	info: PageInfo;
	handleSubmit: (newPage?: number) => void;
	currentPage: number;
};

export const Pagination = ({
	info,
	handleSubmit,
	currentPage
}: PaginationProps) => {
	const [inputData, setInputData] = useState<number>();
	console.log(`Pagination`, info);

	function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			handleSubmit(inputData);
		}
	}

	if (!info) return null;

	return (
		<S.Wrapper>
			<button disabled={currentPage <= 2} onClick={() => handleSubmit(1)}>
				{"<<"}
			</button>
			<button
				disabled={currentPage === 1}
				onClick={() => handleSubmit(currentPage - 1)}>
				{"<"}
			</button>
			<input
				defaultValue={currentPage}
				// value={currentPage}
				onKeyDown={handleEnter}
				type='number'
				onChange={e => setInputData(Number(e.target.value))}
			/>
			<h5>of {info?.pages}</h5>
			<button onClick={() => handleSubmit(inputData)}>Pesquisar</button>
			<button
				disabled={currentPage === info.pages}
				onClick={() => handleSubmit(currentPage + 1)}>
				{">"}
			</button>
			<button
				disabled={currentPage >= info?.pages - 1}
				onClick={() => handleSubmit(info.pages)}>
				{">>"}
			</button>
		</S.Wrapper>
	);
};
