import Link from "next/link";
import * as S from "./styles";

export const NavBar = () => {
	return (
		<S.Wrapper>
			<S.Title>Rick and Morty</S.Title>
			<S.LinksWrapper>
				<Link href='/'>Inicio</Link>
				<Link href='/favorites'>Favoritos</Link>
			</S.LinksWrapper>
		</S.Wrapper>
	);
};
