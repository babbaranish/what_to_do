import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	z-index: -1;
	background-color: #5c5aab;
`;
export const SidebarItemContainer = styled.ul`
	color: ghostwhite;
	font-size: 1.5em;
	padding-top: 3em;
	list-style: none;
	display: flex;
	flex-direction: column;
`;
export const SidebarItems = styled(Link)`
	text-transform: uppercase;
	font-weight: 400;
	border-radius: 50px;
	margin-top: 1.2em;
	text-align: center;
	cursor: pointer;
	padding: 0.5em 2em 0.5em;
	background-color: #9492de;
`;
