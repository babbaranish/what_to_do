import React from "react";
// import { ReactComponent as Background } from '../../assets/Vector1.svg';
import { ReactComponent as Illustration } from "../../assets/to_do_list_2.svg";
import CustomButton from "../custom-button/Custom-button.component";
//Styles
import {
	Logo,
	Heading,
	Paragraph,
	LeftContainer,
	MainContainer,
	RightContainer,
	ButtonContainer,
} from "./getting-started.styles";
import { Link } from "react-router-dom";

const GettingStarted = () => {
	return (
		<MainContainer>
			<LeftContainer>
				<Logo>What ToDo</Logo>
				<Heading>
					Stay on Track and Organize <br />
					Your Life With What ToDo
				</Heading>
				<Paragraph>What ToDo is your Ultimate Daily Planner.</Paragraph>
				<Paragraph>Create, Assign, Organize & Prioritize.</Paragraph>
				<Paragraph>
					Get Notification and Reminder to keep on track
				</Paragraph>
				<ButtonContainer>
					<CustomButton>Signup Now</CustomButton>
				</ButtonContainer>
			</LeftContainer>

			<RightContainer>
				<Illustration />
			</RightContainer>
		</MainContainer>
	);
};

export default GettingStarted;
