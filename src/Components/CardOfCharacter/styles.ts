import styled from "styled-components";

export const Wrapper = styled.div`
	border-radius: 10px;
	border: solid 1px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem 0;
`;

export const ImageCharacter = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 10px 10px 5px 5px;
`;

export const InformationCharacter = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 1rem;
	margin-top: 1rem;
	h1 {
		font-size: 1.15rem;
	}
	div {
		width: 100%;
		font-size: 0.55rem;
		line-height: 0.75rem;
	}
`;

export const Button = styled.button`
	margin: 0.5rem 0;
	padding: 0.25rem 0.5rem;
	background-color: #e89ac7;
	color: black;
	border: 0;
	border-radius: 0.5rem;
`;
