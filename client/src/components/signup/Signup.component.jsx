import React, { useState } from "react";
import Logo from "../logo/Logo.component";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
//components
import CustomButton from "../custom-button/Custom-button.component";
import FormInput from "../form-input/Form-input.component";
import { register } from "../../redux/auth/auth.action";
//styles
import {
	SignupContainer,
	LeftSignup,
	SignupHeading,
	SignupPara,
	RightSignup,
	LoginPara,
	LoginHeading,
	LoginContainer,
	ButtonContainer,
} from "./signup.styles";

const Signup = ({ register }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	}); //form initial state
	const [redirect, setRedirect] = useState({
		redirect: false,
	}); //Redirect initial state

	const { name, email, password } = formData;
	//set the input values
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	//register user and set the redirect state to true and redirect to homepage
	const handleSubmit = async (e) => {
		e.preventDefault();
		register({ name, email, password }); //register user
		setRedirect({ redirect: true });
	};
	//redirect to homepage
	const renderRedirect = () => {
		if (redirect.redirect) {
			return <Redirect to='/dashboard' />;
		}
	};
	return (
		<SignupContainer>
			{renderRedirect()}
			<Logo color='#515154' />
			<LeftSignup>
				<SignupHeading>Don't Have an Account Yet?</SignupHeading>
				<SignupPara>Let's Create One. It's Quick and Easy</SignupPara>
				<form onSubmit={handleSubmit}>
					<FormInput
						type='text'
						name='name'
						onChange={handleChange}
						value={name}
						label='Name'
						placeholder='Enter Your Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={handleChange}
						label='E-Mail'
						placeholder='Enter Your E-Mail'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={handleChange}
						label='Password'
						placeholder='Enter Your Password'
						required
					/>
					<CustomButton
						isTextColor='#fff'
						isColor='#5e5bd1'
						isBorderColor='none'
					>
						Sign up
					</CustomButton>
				</form>
			</LeftSignup>
			<RightSignup>
				<LoginContainer>
					<LoginHeading>Already Have an Account?</LoginHeading>
					<LoginPara>Click on Login to Access your Todos</LoginPara>
					<ButtonContainer>
						<Link to='/login'>
							<CustomButton
								isColor='#AFADEF'
								isTextColor='#fff'
								isBorderColor='#5e5bd1'
							>
								Login
							</CustomButton>
						</Link>
					</ButtonContainer>
				</LoginContainer>
			</RightSignup>
		</SignupContainer>
	);
};

export default connect(null, { register })(Signup);
