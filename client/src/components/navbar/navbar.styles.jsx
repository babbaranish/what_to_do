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
	@media only screen and (max-width: 1200px) and (min-width: 500px) {
		padding-left: 0em;
		margin: 1.5em 0 0 3em;
	}
	@media only screen and (max-width: 500px) {
		padding-left: 0em;
		margin: 1.5em 0 0 0.71em;
	}
`;
export const DashboardLogo = styled(Link)`
	font-size: 2em;
	color: #fff;
	font-weight: bold;
	@media only screen and (max-width: 1200px) and (min-width: 300px) {
		font-size: 1em;
	}
	@media only screen and (max-width: 400px) {
		padding: 0.11em;
		font-size: 0.8em;
	}
`;

export const NavbarItems = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin: 0em 2em 0 0;
	font-size: 1.5em;
	color: ghostwhite;
	flex-basis: 80%;
	@media only screen and (max-width: 800px) and (min-width: 300px) {
		margin: 0;
	}
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
	flex-basis: 84%;
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
	@media only screen and (max-width: 1200px) and (min-width: 800px) {
		width: 30vh;
	}
	@media only screen and (max-width: 800px) and (min-width: 300px) {
		width: 20vh;
	}
`;

export const UserSettings = styled.button`
	background-color: transparent;
	font-size: 1.3em;
	border: none;
	width: 55px;
	height: 45px;
	color: white;
	padding-bottom: 3px;
	&:hover {
		cursor: pointer;
		background-color: #8987d6;
		border-radius: 8px;
	}
	&:focus {
		outline: none;
	}
`;
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-basis: 8%;
	align-items: center;
`;

export const AddButton = styled.button`
	background-color: transparent;
	border: none;
	color: white;
	width: 55px;
	height: 45px;
	padding-top: 3px;

	&:hover {
		cursor: pointer;
		background-color: #8987d6;
		border-radius: 8px;
	}
	&:focus {
		outline: none;
	}
`;
