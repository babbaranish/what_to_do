import styled from "styled-components";

const subColor = "grey";

export const FormGroup = styled.div`
	position: relative;
	margin: 16px 0;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;

	input[type="password"] {
		letter-spacing: 0.3em;
	}
`;

export const Input = styled.input`
	height: 40px;
	border: 0.12em solid #777;

	width: 50vh;
	color: ${subColor};
	padding: 10px;

	&:focus {
		outline: none;
		border: 2px solid #5b59b5;
	}
	&::placeholder {
		font-size: 0.9em;
		letter-spacing: 1px;
	}
`;
export const Label = styled.label`
	color: ${subColor};
	text-align: left;
	margin-left: 2px;
	font-size: 0.9em;
`;
