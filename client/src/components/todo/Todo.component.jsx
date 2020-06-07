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
import { changeTodo } from "../../redux/todos/todos.action";

const Todo = ({ title, id, changeTodo, isCompleted }) => {
	const [checked, setCheck] = useState({ isChecked: false });
	const handleInputChange = (e) => {
		setCheck({ isChecked: e.target.checked });
		console.log(isCompleted);
		// todos.map((todo) => console.log(todo.isCompleted));
		// changeTodo({ isCompleted });
	};
	const { isChecked } = checked;
	return (
		<TodoContainer>
			<CheckboxContainer>
				<Input
					type='checkbox'
					checked={isChecked}
					name='check'
					value={isChecked}
					id={id}
					onChange={handleInputChange}
					hidden
				/>
				<Checkbox htmlFor={id}></Checkbox>
			</CheckboxContainer>
			<TitleContainer isAuth={isCompleted}> {title}</TitleContainer>
			<EditContainer>
				<EditButton>
					<i className='las la-edit'></i>
				</EditButton>
			</EditContainer>
			<DeleteContainer>
				<DeleteButton>
					<i className='las la-trash-alt'></i>
				</DeleteButton>
			</DeleteContainer>
		</TodoContainer>
	);
};
const mapStateToProps = (state) => ({
	todos: state.todos.todos,
});
export default connect(mapStateToProps, { changeTodo })(Todo);
