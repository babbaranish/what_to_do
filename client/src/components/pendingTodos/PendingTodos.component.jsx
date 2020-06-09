import React from "react";
import { connect } from "react-redux";
import Todo from "../todo/Todo.component";
import { PendingTodosContainer } from "./pendingTodos.styles";
const PendingTodos = ({ todos: { todos } }) => {
	return (
		<PendingTodosContainer>
			{todos.map((todo) => {
				const { _id, isActive, isCompleted } = todo;
				if (isActive) {
					return (
						<Todo
							id={_id}
							key={_id}
							title={todo.todo}
							isChecked={isCompleted}
							isPending={isActive}
						/>
					);
				}
			})}
		</PendingTodosContainer>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});
export default connect(mapStateToProps, null)(PendingTodos);
