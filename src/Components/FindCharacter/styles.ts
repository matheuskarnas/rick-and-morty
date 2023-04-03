import styled from "styled-components";

export const Wrapper = styled.div``;
export const Top = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-top: 3rem;
	fieldset {
		display: flex;
	}
`;
export const SubmitInput = styled.input`
	border: 1px solid;
`;
export const Bottom = styled.div`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, 150px);
	gap: 15px;
	justify-content: space-evenly;
	label {
		margin-left: 0.5rem;
	}
`;
export const TextInputGroup = styled.div``;

export const InputText = styled.input`
	border: solid 1px;
	padding-left: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
