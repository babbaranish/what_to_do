import styled from "styled-components";

export const LoginContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100vh;
`;
export const LeftLogin = styled.section`
	background-image: url(${require("../../assets/bg.svg")});
	background-size: cover;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: scaleX(-1);
`;
export const SignupContainer = styled.div`
	margin-top: -1em;
	transform: scaleX(-1);
`;
export const SignupHeading = styled.h1`
	color: ghostwhite;
	margin-bottom: 0.5em;
	font-size: 2em;
`;

export const SignupPara = styled.p`
	color: ghostwhite;
	font-size: 1.3em;
	margin-bottom: 2em;
`;
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;
export const RightLogin = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const LoginHeading = styled.h1`
	color: #515154;
`;
export const LoginPara = styled.p`
	font-size: 1.3em;
	margin-bottom: 0.1em;
	color: #767676;
`;
