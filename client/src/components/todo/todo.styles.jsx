import styled from "styled-components";
export const TodoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1em 4em 1em 1em;
	height: 3.5em;
	border-bottom: 2px solid #7777773b;
	&:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 500px) {
		margin-right: 2em;
	}
`;

export const TitleContainer = styled.div`
	padding: 15px;
	flex-basis: 85%;
	color: ${(props) => (props.isAuth ? `#777` : `#333`)};
	font-weight: 400;
	font-style: ${(props) => (props.isAuth ? `italic` : `none`)};
	text-decoration: ${(props) => (props.isAuth ? "line-through" : "none")};
	text-overflow: ellipsis;

	&:hover {
		/* font-weight: bold; */
		font-weight: 500;
		color: black;
	}
`;

export const DeleteContainer = styled.div`
	padding: 10px;
	flex-basis: 5%;
`;

export const DeleteButton = styled.button`
	background: transparent;
	border: none;
	font-size: 1.5em;
	padding: 0em 0.27em;
	color: #282828;
	&:focus,
	&:hover {
		outline: none;
		background-color: #d4d4d4cc;
		cursor: pointer;
		color: #5c5aab;
		border-radius: 10px;
	}
`;

export const EditContainer = styled.div`
	flex-basis: 5%;
	padding: 10px;
`;

export const EditButton = styled.button`
	background: transparent;
	border: none;
	font-size: 1.5em;
	color: #282828;
	padding: 0em 0.27em;
	&:focus,
	&:hover {
		outline: none;
		cursor: pointer;
		background-color: #d4d4d4cc;
		color: #5c5aab;
		border-radius: 10px;
	}
`;
export const CheckboxContainer = styled.div`
	padding: 18px 15px 15px 25px;
	flex-basis: 5%;
	display: flex;
`;
export const Input = styled.input.attrs({ type: "checkbox" })``;
export const Checkbox = styled.label`
	display: block;
	width: 25px;
	height: 25px;
	background-color: #ddd;
	border-radius: 15px;

	position: relative;
	overflow: hidden;
	transition: background-color 0.4s;
	cursor: pointer;

	&::after {
		content: "";
		width: 10px;
		height: 15px;
		position: absolute;
		top: 0px;
		left: 4px;

		transform: rotateZ(220deg);
	}
	${Input}:checked + & {
		background-color: #5c5aab;
		border: 1.5px solid #5c5aab;
		&::after {
			border-left: 2px solid white;
			border-top: 2px solid white;
		}
	}
`;
