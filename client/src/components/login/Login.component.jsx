import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
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

const Login = ({ login, history, match }) => {
	const [email, setEmail] = useState(""); //form initial state
	const [password, setPass] = useState("");

	//Login user and set the redirect state to true and redirect to homepage
	const handleSubmit = async (e) => {
		e.preventDefault();
		await login({ email, password }); //login user
		history.push("/dashboard");
	};

	return (
		<LoginContainer>
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
						onChange={(e) => setEmail(e.target.value)}
						label='E-Mail'
						placeholder='Enter Your E-Mail'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={(e) => setPass(e.target.value)}
						label='Password'
						placeholder='Enter Your Password'
						required
					/>
					<CustomButton
						isTextColor='#fff'
						isColor='#5e5bd1'
						isBorderColor='none'
					>
						Log In <i className='las la-sign-in-alt'></i>
					</CustomButton>
				</form>
			</RightLogin>
		</LoginContainer>
	);
};

export default withRouter(connect(null, { login })(Login));
