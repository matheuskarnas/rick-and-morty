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
	favoritesCharactersCache: number[];
	addNewFavorite: (id: number) => void;
	removeFavorite: (id: number) => void;
};
export const CardOfCharacter = ({
	character,
	favoritesCharactersCache,
	addNewFavorite,
	removeFavorite
}: CardOfCharacterProps) => {
	return (
		<S.Wrapper>
			<S.ImageCharacter
				src={character.image}
				alt={`Imagem do personagem ${character.name}`}
			/>

			<S.InformationCharacter>
				<h1>{character.name}</h1>

				{favoritesCharactersCache.indexOf(character.id) === -1 ? (
					<S.Button
						onClick={() => {
							addNewFavorite(character.id);
						}}>
						Favoritar
					</S.Button>
				) : (
					<S.Button
						onClick={() => {
							removeFavorite(character.id);
						}}>
						Remover
					</S.Button>
				)}

				<div>
					<h2>Especie: {character.species}</h2>
					<h2>Gênero: {character.gender}</h2>
					{character.type && <h2>Tipo: {character.type}</h2>}
				</div>
			</S.InformationCharacter>
		</S.Wrapper>
	);
};
