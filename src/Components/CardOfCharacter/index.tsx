import * as S from "./styles";

type CharacterData = {
	id: number;
	name: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	url: string;
};

type CardOfCharacterProps = {
	character: CharacterData;
	key: number;
};
export const CardOfCharacter = ({ character }: CardOfCharacterProps) => {
	return (
		<S.Wrapper>
			<S.ImageCharacter
				src={character.image}
				alt={`Imagem do personagem ${character.name}`}
			/>

			<S.InformationCharacter>
				<h1>{character.name}</h1>

				<div>
					<h2>Especie: {character.species}</h2>
					<h2>Gênero: {character.gender}</h2>
					{character.type && <h2>Tipo: {character.type}</h2>}
				</div>
			</S.InformationCharacter>
		</S.Wrapper>
	);
};
