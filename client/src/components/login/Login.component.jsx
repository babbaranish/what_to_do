import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Logo from "../logo/Logo.component";
//components
import CustomButton from "../custom-button/Custom-button.component";
import FormInput from "../form-input/Form-input.component";
//redux
import { connect } from "react-redux";
import { login } from "../../redux/auth/auth.action";
//styles
import {
	LoginContainer,
	LeftLogin,
	SignupContainer,
	SignupHeading,
	SignupPara,
	ButtonContainer,
	RightLogin,
	LoginHeading,
	LoginPara,
} from "./login.styles";

const Login = ({ login }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	}); //form initial state
	const [redirect, setRedirect] = useState({ redirect: false });

	const { email, password } = formData;
	//set the input values
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	//Login user and set the redirect state to true and redirect to homepage
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("test");
		login({ email, password }); //login user
		console.log("test");

		setRedirect({ redirect: true });
	};
	const redirectRender = () => {
		if (redirect.redirect) {
			return <Redirect to='/' />;
		}
	};
	return (
		<LoginContainer>
			{redirectRender()}
			<Logo color='#e9ebee' />
			<LeftLogin>
				<SignupContainer>
					<SignupHeading>Don't Have an Account yet?</SignupHeading>
					<SignupPara>
						Let's get you all set up so you can start creating your
						todos
					</SignupPara>
					<ButtonContainer>
						<Link to='/signup'>
							<CustomButton
								isColor='#AFADEF'
								isTextColor='#fff'
								isBorderColor='#5e5bd1'
							>
								Sign Up
							</CustomButton>
						</Link>
					</ButtonContainer>
				</SignupContainer>
			</LeftLogin>

			<RightLogin>
				<LoginHeading>Log In to your Account</LoginHeading>
				<LoginPara>
					Log In to your Account so you can continue creating your
					todos.
				</LoginPara>
				<form onSubmit={handleSubmit}>
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
						Log In
					</CustomButton>
				</form>
			</RightLogin>
		</LoginContainer>
	);
};

export default connect(null, { login })(Login);
