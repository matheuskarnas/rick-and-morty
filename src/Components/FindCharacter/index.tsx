type FindCharacterProps = {
	// handleSubmit: () => void;
	slug: string;
};

export const FindCharacter = ({ slug }: FindCharacterProps) => {
	// function inputInitialValue(name: string) {

	// }

	function inputIsCheck(name: string, value: string) {
		const index = slug.indexOf(`${name}=${value}`);
		if (index > -1) return true;
		return false;
	}

	return (
		<div>
			<form>
				<fieldset>
					<input
						type='text'
						name='name'
						id='name'
						// defaultValue={inputInitialValue("name")}
					/>
				</fieldset>
				<input type='submit' />
				<button>Mais filtros+</button>
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
				<fieldset>
					<label htmlFor='type'>Tipo: </label>
					<input type='text' name='type' id='type' />
				</fieldset>
				<fieldset>
					<label htmlFor='species'>Especie</label>
					<input type='text' name='species' id='species' />
				</fieldset>
			</form>
		</div>
	);
};
