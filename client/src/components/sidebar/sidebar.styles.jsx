import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	z-index: 2;
	background-color: #5c5aab;
`;
export const SidebarItemContainer = styled.ul`
	color: ghostwhite;
	font-size: 1.5em;
	padding-top: 3em;
	list-style: none;
	display: flex;
	flex-direction: column;

	@media only screen and (max-width: 1200px) and (min-width: 900px) {
		padding-top: 4em;
		font-size: 1.3em;
	}
	@media only screen and (max-width: 900px) and (min-width: 500px) {
		padding-top: 5em;
		font-size: 1em;
	}
	@media only screen and (max-width: 500px) and (min-width: 300px) {
		padding-top: 5em;
		font-size: 1em;
	}
`;
export const ItemContainers = styled(Link)`
	display: flex;
	justify-content: center;
	margin-top: 0.81em;
	border-radius: 50px;
	background-color: #9492de;
	margin-top: 1.2em;
`;
export const SidebarItems = styled.div`
	text-transform: uppercase;
	font-weight: 400;

	text-align: center;
	cursor: pointer;
	padding: 0.5em 0em 0.5em;
	width: 9em;
	@media only screen and (max-width: 1200px) and (min-width: 900px) {
		width: 7em;
		font-size: 1em;
	}
	@media only screen and (max-width: 900px) and (min-width: 500px) {
		width: 6em;
	}
	@media only screen and (max-width: 500px) and (min-width: 300px) {
		width: 5em;
	}
`;
