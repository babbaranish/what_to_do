import React from "react";
// import { ReactComponent as Background } from '../../assets/Vector1.svg';
import { ReactComponent as Illustration } from "../../assets/to_do_list_2.svg";
import CustomButton from "../custom-button/Custom-button.component";
import Logo from "../logo/Logo.component";
//Styles
import {
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
			<Logo color='#515154' />
			<LeftContainer>
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
					<Link to='/signup'>
						<CustomButton
							isTextColor='#fff'
							isColor='#5e5bd1'
							isBorderColor='none'
						>
							Signup Now
						</CustomButton>
					</Link>
				</ButtonContainer>
			</LeftContainer>

			<RightContainer>
				<Illustration />
			</RightContainer>
		</MainContainer>
	);
};

export default GettingStarted;
