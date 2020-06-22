import React, { useState } from "react";
import FormInput from "../form-input/Form-input.component";
import CustomButton from "../custom-button/Custom-button.component";
import {
	CreateTodoContainer,
	BoxContainer,
	InputContainer,
	ButtonContainer,
	CloseConainer,
	DatePicker,
	DateLabel,
} from "./createTodo.styles";
import { connect } from "react-redux";
import { createTodoAsync } from "../../redux/todos/todos.action";
import { hideTodo } from "../../redux/hidden/hidden.action";

import PropTypes from "prop-types";
const CreateTodo = ({ createTodoAsync, hideTodo, hidden }) => {
	//initial state
	const [state, setState] = useState({
		todo: "",
		deleteAt: new Date(),
	});

	//setting createTodoInpute State
	const handleChange = (e) => {
		setState({
			...state,
			todo: e.target.value,
		});
		console.log(hidden);
	};
	//setting DatePicker State
	const datePicker = (date) => {
		setState({ ...state, deleteAt: date });
	};
	//calling createTodo action
	const { todo, deleteAt } = state;
	const handleSubmit = (e) => {
		e.preventDefault();
		const deleteWhen = deleteAt.toISOString();
		console.log(deleteWhen);
		createTodoAsync({ todo, deleteWhen });

		hideTodo();
	};
	//setting hidden state to true to close the modal
	const closePopup = (e) => {
		e.preventDefault();
		hideTodo();
	};

	return (
		<CreateTodoContainer hidden={hidden}>
			<BoxContainer>
				<form onSubmit={handleSubmit}>
					<InputContainer>
						<FormInput
							label='Enter Todo'
							type='text'
							name='todo'
							placeholder='Enter Todo'
							value={todo}
							onChange={handleChange}
						/>
					</InputContainer>
					<InputContainer>
						<DateLabel>Select Date & Time</DateLabel>
						<DatePicker
							closeWidgets={false}
							clearIcon={null}
							minDate={new Date()}
							value={deleteAt}
							onChange={datePicker}
						/>
					</InputContainer>
					<ButtonContainer>
						<CustomButton
							type='submit'
							isTextColor='#fff'
							isColor='#5e5bd1'
							isBorderColor='none'
						>
							ADD TODO
						</CustomButton>
					</ButtonContainer>

					<CloseConainer onClick={closePopup}>&times;</CloseConainer>
				</form>
			</BoxContainer>
		</CreateTodoContainer>
	);
};

CreateTodo.propTypes = {
	createTodoAsync: PropTypes.func.isRequired,
};
const mapStateToProp = (state) => ({
	hidden: state.hidden,
});
export default connect(mapStateToProp, { createTodoAsync, hideTodo })(
	CreateTodo,
);
