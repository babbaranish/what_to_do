import React, { useState } from "react";

import {
	TodoContainer,
	CheckboxContainer,
	TitleContainer,
	DeleteContainer,
	DeleteButton,
	EditContainer,
	EditButton,
	Checkbox,
	Input,
} from "./todo.styles";
import { connect } from "react-redux";
import { changeTodo, deleteTodoAsync } from "../../redux/todos/todos.action";

const Todo = ({
	title,
	id,
	changeTodo,
	isPending,
	isChecked,
	deleteTodoAsync,
}) => {
	const [state, setCheck] = useState({
		isCompleted: isChecked,
		isActive: isPending,
	}); //initial state is set to props from store which is sent from another components

	//setting up checkbox state value
	const handleInputChange = (e) => {
		setCheck((prevState) => {
			return { ...prevState, isCompleted: e.target.checked };
		}); //set checkbox state
		const isCompleted = !state.isCompleted; //inverting value
		console.log(e.target.checked);
		const isActive = !isCompleted; //setting pending value to inverse of isComplete
		console.log(`iscomple ${!isCompleted}`);
		console.log(`isactive ${isActive}`);
		setCheck((prevState) => {
			return { ...prevState, isActive: isActive };
		}); //setting pending value
		changeTodo({ isCompleted, id, isActive }); // calling api to set value at back-end
	};
	//delete todo function
	const handleDelete = (e) => {
		e.preventDefault();
		console.log(id);
		deleteTodoAsync({ id });
	};

	const { isCompleted } = state;
	return (
		<TodoContainer>
			<CheckboxContainer>
				<Input
					type='checkbox'
					name={id}
					key={id}
					id={id}
					checked={isChecked}
					value={isCompleted}
					onChange={handleInputChange}
					hidden
				/>
				<Checkbox htmlFor={id}></Checkbox>
			</CheckboxContainer>
			<TitleContainer isAuth={isChecked}> {title}</TitleContainer>
			<EditContainer>
				<EditButton>
					<i className='las la-edit'></i>
				</EditButton>
			</EditContainer>
			<DeleteContainer>
				<DeleteButton onClick={handleDelete}>
					<i className='las la-trash-alt'></i>
				</DeleteButton>
			</DeleteContainer>
		</TodoContainer>
	);
};

export default connect(null, { changeTodo, deleteTodoAsync })(Todo);
