import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
	position: absolute;
	font-size: 2rem;
	top: 0.5em;
	left: 7.2em;
	color: ${(props) => props.color} !important;
	cursor: pointer;
	font-weight: bold;
	z-index: 999;
`;
