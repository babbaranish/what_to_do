import React, { useEffect } from "react";
import { AllTodosContainer } from "./alltodos.styles";
import { getTodosAsync } from "../../redux/todos/todos.action";
import { connect } from "react-redux";
import Todo from "../todo/Todo.component";

const Alltodos = ({ getTodosAsync, todos: { todos } }) => {
	useEffect(() => {
		getTodosAsync();
	}, [getTodosAsync]);

	return (
		<AllTodosContainer>
			{todos.map((todo) => {
				return (
					<Todo
						id={todo._id}
						key={todo._id}
						title={todo.todo}
						isChecked={todo.isCompleted}
						isPending={todo.isActive}
						deleteAt={todo.deleteWhen}
					/>
				);
			})}
		</AllTodosContainer>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});
export default connect(mapStateToProps, { getTodosAsync })(Alltodos);
