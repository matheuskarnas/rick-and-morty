import { useState } from "react";
import { usePage } from "../../hooks/usePage";
import { CardOfCharacter } from "../CardOfCharacter";

export const CharacterList = () => {
	const [inputData, setInputData] = useState<number>();
	const [pageNumber, setPageNumber] = useState(1);
	const { data, isLoading, error } = usePage(pageNumber);
	console.log("CharacterList", pageNumber, data);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>Error</h1>;
	}

	function handleSubmit() {
		if (!inputData) {
			return alert("insira um valor");
		}

		if (data && (1 > inputData || inputData > data.info.pages)) {
			return alert(`Insira um valor entre 1 e ${data.info.pages}`);
		}
		setPageNumber(inputData);
	}

	return (
		<form>
			<input
				type='number'
				onChange={e => setInputData(Number(e.target.value))}
			/>
			<input
				type='submit'
				value='Submit'
				onClick={e => {
					e.preventDefault();
					handleSubmit();
				}}
			/>
			{data?.results.map(character => (
				<CardOfCharacter key={character.id} character={character} />
			))}
		</form>
	);
};
