import * as S from "./styles";

type FindCharacterProps = {
	slug: string;
};

export const FindCharacter = ({ slug }: FindCharacterProps) => {
	function inputInitialValue(inputName: string) {
		const index = slug.indexOf(`${inputName}=`);

		if (index === -1) return undefined;

		const finalIndex = slug.indexOf("&", index);

		if (finalIndex === -1) return slug.slice(index + inputName.length + 1);

		return slug.slice(index + inputName.length + 1, finalIndex);
	}

	function inputIsCheck(name: string, value: string) {
		const index = slug.indexOf(`${name}=${value}`);
		if (index > -1) return true;
		return false;
	}

	return (
		<S.Wrapper>
			<form>
				<S.Top>
					<fieldset>
						<label htmlFor='name'>Nome: </label>
						<S.InputText
							type='text'
							name='name'
							id='name'
							defaultValue={inputInitialValue("name")}
							placeholder='Ex: Rick'
						/>
					</fieldset>
					<S.SubmitInput type='submit' />
				</S.Top>
				<S.Bottom>
					<fieldset>
						<legend>Character status</legend>
						<p>
							<input
								type='checkbox'
								name='status'
								id='status_1'
								value='alive'
								defaultChecked={inputIsCheck("status", "alive")}
							/>
							<label htmlFor='status_1'>Alive</label>
						</p>
						<p>
							<input
								type='checkbox'
								name='status'
								id='status_2'
								value='dead'
								defaultChecked={inputIsCheck("status", "dead")}
							/>
							<label htmlFor='status_2'>Dead</label>
						</p>
						<p>
							<input
								type='checkbox'
								name='status'
								id='status_3'
								value='unknown'
								defaultChecked={inputIsCheck("status", "unknown")}
							/>
							<label htmlFor='status_3'>Unknown</label>
						</p>
					</fieldset>
					<fieldset>
						<legend>Character gender</legend>
						<p>
							<input
								type='checkbox'
								name='gender'
								id='gender_1'
								value='female'
								defaultChecked={inputIsCheck("gender", "female")}
							/>
							<label htmlFor='gender_1'>Female</label>
						</p>
						<p>
							<input
								type='checkbox'
								name='gender'
								id='gender_2'
								value='male'
								defaultChecked={inputIsCheck("gender", "male")}
							/>
							<label htmlFor='gender_2'>Male</label>
						</p>
						<p>
							<input
								type='checkbox'
								name='gender'
								id='gender_3'
								value='genderless'
								defaultChecked={inputIsCheck("gender", "genderless")}
							/>
							<label htmlFor='status_3'>Genderless</label>
						</p>
						<p>
							<input
								type='checkbox'
								name='gender'
								id='gender_4'
								value='unknown'
								defaultChecked={inputIsCheck("gender", "unknown")}
							/>
							<label htmlFor='status_4'>Unknown</label>
						</p>
					</fieldset>
					<S.TextInputGroup>
						<fieldset>
							<label htmlFor='type'>Tipo: </label>
							<S.InputText
								type='text'
								name='type'
								id='type'
								defaultValue={inputInitialValue("type")}
								placeholder='Ex: Hole'
							/>
						</fieldset>
						<fieldset>
							<label htmlFor='species'>Especie: </label>
							<S.InputText
								type='text'
								name='species'
								id='species'
								defaultValue={inputInitialValue("species")}
								placeholder='Ex: Robot'
							/>
						</fieldset>
					</S.TextInputGroup>
				</S.Bottom>
			</form>
		</S.Wrapper>
	);
};
