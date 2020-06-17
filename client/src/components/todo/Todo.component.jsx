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
import {
	changeTodo,
	deleteTodoAsync,
	asyncAddTemp,
} from "../../redux/todos/todos.action";
import { connect } from "react-redux";
import { showHideUpdateTodo } from "../../redux/hidden/hidden.action";
const Todo = ({
	title,
	id,
	changeTodo,
	isPending,
	isChecked,
	deleteTodoAsync,
	showHideUpdateTodo,
	deleteAt,
	asyncAddTemp,
}) => {
	const titleDate = new Date(deleteAt).toString().slice(0, 25);
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
		const isActive = !isCompleted; //setting pending value to inverse of isComplete
		setCheck((prevState) => {
			return { ...prevState, isActive: isActive };
		}); //setting pending value
		changeTodo({ isCompleted, id, isActive }); // calling api to set value at back-end
	};
	//delete todo function
	const handleDelete = (e) => {
		e.preventDefault();
		deleteTodoAsync({ id });
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		await asyncAddTemp({ title, id, deleteAt });
		await showHideUpdateTodo();
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
			<TitleContainer isAuth={isChecked}>
				{" "}
				<abbr
					style={{ textDecoration: "none" }}
					title={`This will be delete at ${titleDate}`}
				>
					{title}
				</abbr>
			</TitleContainer>
			<EditContainer>
				<EditButton onClick={handleUpdate}>
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

export default connect(null, {
	changeTodo,
	deleteTodoAsync,
	showHideUpdateTodo,
	asyncAddTemp,
})(Todo);
