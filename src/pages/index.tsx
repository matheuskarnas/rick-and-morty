import Head from "next/head";
import { CharacterList } from "@/Components/CharacterList";
import { GetServerSideProps } from "next";
import { FindCharacter } from "@/Components/FindCharacter";
import { NavBar } from "@/Components/NavBar";

type HomeProps = {
	slug: string;
};

export default function Home({ slug }: HomeProps) {
	return (
		<>
			<Head>
				<title>Rick & Morty</title>
				<meta
					name='description'
					content='Rick and Morty series characters list.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar />
			<FindCharacter slug={slug} />
			<CharacterList slug={slug} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async context => {
	const slug: string = context.resolvedUrl;
	return {
		props: {
			slug
		}
	};
};
