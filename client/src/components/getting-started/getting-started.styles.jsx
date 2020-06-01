import styled from "styled-components";
// import { ReactComponent as Background } from '../../assets/Vector1.svg';
import svg from "../../assets/bg.svg";
export const MainContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const LeftContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	justify-content: center;
	padding: 0rem 0rem 6rem 10rem;
`;

export const RightContainer = styled.section`
	background-image: url(${svg});
	background-size: cover;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Heading = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	color: #515154;
	line-height: 1.5em;
	margin: 2.2em 0em 1em 0em;
`;
export const Paragraph = styled.p`
	font-size: 1.3rem;
	font-weight: 700;
	color: #767676;
	margin: 0em 0px 1em;
`;
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 2em;
`;
