import { useState } from "react";
import * as S from "./styles";

export const Count = () => {
	const [count, setCount] = useState(0);
	return (
		<S.Wrapper>
			<S.Button onClick={() => setCount(count + 1)}>aperta {count}</S.Button>
		</S.Wrapper>
	);
};
