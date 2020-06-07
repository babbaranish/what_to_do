import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
	height: 70px;
	width: 100%;
	display: flex;
	background-color: #5c5aab;
	box-shadow: 1px 1px 5px 4px rgba(46, 45, 46, 0.14);
	position: fixed;
	z-index: 4;
`;
export const LogoContainer = styled.div`
	width: 25%;
	margin: 0.7em 0 0 5em;
	padding-left: 3em;
`;
export const DashboardLogo = styled(Link)`
	font-size: 2em;
	color: #fff;
	font-weight: bold;
`;

export const NavbarItems = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin: 0em 2em 0 0;
	font-size: 1.5em;
	color: ghostwhite;
`;

export const NavbarSearch = styled.input`
	height: 40px;
	border-radius: 50px;
	width: 50vh;
	color: ghostwhite;
	padding: 10px;
	border: none;
	margin: 1.1em 1em 0em 0em;
	font-weight: bold;
	background-color: #8987d6;
	width: 50em;
	box-shadow: 1px -1px 5px 1px rgba(46, 45, 46, 0.1);
	&:focus {
		outline: none;
	}
	&::placeholder {
		font-size: 0.9em;
		color: ghostwhite;
		font-weight: bold;
		letter-spacing: 2px;
		margin: 2em;
		padding: 1em;
	}
`;

export const UserSettings = styled.div`
	margin-top: 0.45em;
	font-weight: bold;
	font-size: 30px;
	text-transform: uppercase;
`;
