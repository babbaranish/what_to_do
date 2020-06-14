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
import UpdateTodo from "../updateTodo/UpdateTodo.component";
import { connect } from "react-redux";
import { changeTodo, deleteTodoAsync } from "../../redux/todos/todos.action";
import { showHideUpdateTodo } from "../../redux/hidden/hidden.action";
const Todo = ({
	title,
	id,
	changeTodo,
	isPending,
	isChecked,
	deleteTodoAsync,
	showHideUpdateTodo,
	updateHidden,
	deleteAt,
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
	const handleUpdate = (e) => {
		e.preventDefault();
		showHideUpdateTodo();
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
				<EditButton onClick={handleUpdate}>
					<i className='las la-edit'></i>
				</EditButton>
			</EditContainer>
			<DeleteContainer>
				<DeleteButton onClick={handleDelete}>
					<i className='las la-trash-alt'></i>
				</DeleteButton>
			</DeleteContainer>
			{updateHidden ? null : (
				<UpdateTodo title={title} id={id} deleteWhen={deleteAt} />
			)}
		</TodoContainer>
	);
};
const mapStateToProps = (state) => ({
	updateHidden: state.hidden.updateHidden,
});
export default connect(mapStateToProps, {
	changeTodo,
	deleteTodoAsync,
	showHideUpdateTodo,
})(Todo);
