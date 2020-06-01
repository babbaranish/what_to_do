import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${(props) => props.isColor};
	color: #fff;
	height: 48px;
	width: 24vh;
	padding: 7px 0px 7px;
	border: none;
	border-radius: 1px;
	font-size: 1.1rem;
	font-weight: bold;
	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.hoverColor};
	}
	&:focus-within {
		outline: none;
		background-color: ${(props) => props.focused};
	}
`;
