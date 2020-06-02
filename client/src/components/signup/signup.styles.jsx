import styled from "styled-components";
export const SignupContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100vh;
`;
export const LeftSignup = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const SignupHeading = styled.h1`
	color: #515154;
`;

export const SignupPara = styled.p`
	font-size: 1.3em;
	margin-bottom: 0.1em;
	color: #767676;
`;

export const RightSignup = styled.section`
	background-image: url(${require("../../assets/bg.svg")});
	background-size: cover;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
export const LoginContainer = styled.div`
	margin-top: -1em;
`;
export const LoginHeading = styled.h1`
	font-size: 2em;
	color: ghostwhite;
`;

export const LoginPara = styled.p`
	color: ghostwhite;
	font-size: 1.3em;
	margin-bottom: 1.5em;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;
