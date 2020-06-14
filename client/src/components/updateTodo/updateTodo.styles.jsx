import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
export const UpdateTodoContainer = styled.div`
	display: flex;
	position: fixed;
	z-index: 99;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.4);
	align-items: center;
	justify-content: center;
	&:focus ~ input {
		color: black !important;
	}
`;
export const BoxContainer = styled.div`
	display: flex;
	background-color: ghostwhite;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 35%;
	padding: 7vh;
	border-radius: 20px;
	position: relative;
`;

export const InputContainer = styled.div`
	position: relative;
	margin: 10px 0;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;
export const DatePicker = styled(DateTimePicker)`
	border: 1px solid #777;
	height: 40px;
	color: gray !important;
	&:focus {
		outline: none;
		border: 2px solid #5b59b5;
	}
	&::placeholder {
		font-size: 0.9em;
		letter-spacing: 1px;
	}
`;
export const DateLabel = styled.label`
	color: gray;
	text-align: left;
	margin-left: 2px;
	font-size: 0.9em;
`;
export const ButtonContainer = styled.div`
	margin-top: 3.5vh;
`;

export const CloseConainer = styled.button`
	background-color: transparent;
	border: none;
	position: absolute;
	font-size: 5vh;
	top: 1vh;
	left: 90%;
	color: rgba(0, 0, 0, 0.9);
	&:hover {
		cursor: pointer;
		z-index: 100;
		color: #5e5bd1;
	}
	&:focus {
		outline: none;
	}
`;
