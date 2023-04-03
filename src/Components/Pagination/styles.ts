import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, 30px);
	justify-content: center;
	align-items: center;
	gap: 5px;
	button {
		border: 0;
		color: black;
	}
`;

export const Top = styled.div`
	display: flex;
	gap: 4px;
`;
export const MidPagination = styled.div`
	display: flex;
	gap: 4px;
	input {
		border: 1px solid;
		width: 2rem;
	}
`;
export const MidSubmit = styled.div``;
export const Bottom = styled.div`
	display: flex;
	gap: 4px;
`;
