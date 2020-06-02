import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${(props) => props.isColor};
	color: ${(props) => props.isTextColor};
	height: 48px;
	width: 186px;
	padding: 7px 0px 7px;
	border: none;
	border-radius: 1px;
	font-size: 1.1rem;
	font-weight: bold;
	border: 2px solid ${(props) => props.isBorderColor};
	&:hover {
		cursor: pointer;
		color: #fff;
		background-color: ${(props) => props.hoverColor};
	}
	&:focus-within {
		outline: none;
		background-color: ${(props) => props.focused};
	}
`;
