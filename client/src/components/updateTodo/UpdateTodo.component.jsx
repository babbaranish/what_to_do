import React, { useState } from "react";
import FormInput from "../form-input/Form-input.component";
import CustomButton from "../custom-button/Custom-button.component";
import {
	UpdateTodoContainer,
	BoxContainer,
	InputContainer,
	ButtonContainer,
	CloseConainer,
	DatePicker,
	DateLabel,
} from "./updateTodo.styles";
import { connect } from "react-redux";
import { updateTodoAsync } from "../../redux/todos/todos.action";
import { showHideUpdateTodo } from "../../redux/hidden/hidden.action";

import PropTypes from "prop-types";
const UpdateTodo = ({
	updateTodoAsync,
	showHideUpdateTodo,
	hidden,
	id,
	title,
	deleteWhen,
}) => {
	//initial state
	const [state, setState] = useState({
		todo: title,
		deleteAt: new Date(),
	});

	//setting createTodoInpute State
	const handleChange = (e) => {
		setState({
			...state,
			todo: e.target.value,
		});
	};
	//setting DatePicker State
	const datePicker = (date) => {
		setState({ ...state, deleteAt: date });
	};
	//calling updateTodo action
	const { todo, deleteAt } = state;
	const handleSubmit = (e) => {
		e.preventDefault();
		const deleteWhen = deleteAt.toISOString();
		updateTodoAsync({ todo, deleteWhen, id });
		showHideUpdateTodo();
	};
	//setting hidden state to true to close the modal
	const closePopup = (e) => {
		e.preventDefault();
		showHideUpdateTodo();
	};

	return (
		<UpdateTodoContainer hidden={hidden}>
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
							UPDATE
						</CustomButton>
					</ButtonContainer>
					<CloseConainer onClick={closePopup}>&times;</CloseConainer>
				</form>
			</BoxContainer>
		</UpdateTodoContainer>
	);
};

UpdateTodo.propTypes = {
	updateTodoAsync: PropTypes.func.isRequired,
};
const mapStateToProp = (state) => ({
	hidden: state.hidden,
});
export default connect(mapStateToProp, { updateTodoAsync, showHideUpdateTodo })(
	UpdateTodo,
);
