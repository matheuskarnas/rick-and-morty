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

	function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			handleSubmit(inputData);
		}
	}

	if (!info) return null;

	return (
		<S.Wrapper>
			<S.Top>
				<button disabled={currentPage <= 2} onClick={() => handleSubmit(1)}>
					{"<<"}
				</button>
				<button
					disabled={currentPage === 1}
					onClick={() => handleSubmit(currentPage - 1)}>
					{"<"}
				</button>
			</S.Top>
			<S.MidPagination>
				<input
					defaultValue={currentPage}
					onKeyDown={handleEnter}
					type='number'
					onChange={e => setInputData(Number(e.target.value))}
				/>
				<h5>{info?.pages}</h5>
			</S.MidPagination>
			<S.MidSubmit>
				<button onClick={() => handleSubmit(inputData)}>Find</button>
			</S.MidSubmit>
			<S.Bottom>
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
			</S.Bottom>
		</S.Wrapper>
	);
};
