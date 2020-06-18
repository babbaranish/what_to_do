import React, { useState } from "react";
import Logo from "../logo/Logo.component";
import { Link, withRouter } from "react-router-dom";
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

const Signup = ({ register, history }) => {
	const [email, setEmail] = useState(""); //form initial state
	const [password, setPass] = useState("");
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");

	//register user and set the redirect state to true and redirect to homepage
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(name);
		await register({ name, email, password, mobile }); //register user
		history.push("/dashboard");
	};

	return (
		<SignupContainer>
			<Logo color='#515154' />
			<LeftSignup>
				<SignupHeading>Don't Have an Account Yet?</SignupHeading>
				<SignupPara>Let's Create One. It's Quick and Easy</SignupPara>
				<form onSubmit={handleSubmit}>
					<FormInput
						type='text'
						name='name'
						onChange={(e) => setName(e.target.value)}
						value={name}
						label='Name'
						placeholder='Enter Your Name'
						required
					/>
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
					<FormInput
						type='text'
						name='email'
						maxLength='10'
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
						label='Mobile Number'
						placeholder='Enter Your Mobile Number'
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

export default withRouter(connect(null, { register })(Signup));
