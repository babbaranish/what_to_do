import React from "react";
import { connect } from "react-redux";
import Todo from "../todo/Todo.component";
import { CompletedTodosContainer } from "./completedTodos.styles";
const CompletedTodos = ({ todos: { todos } }) => {
	return (
		<CompletedTodosContainer>
			{todos.map((todo) => {
				const { _id, isActive, isCompleted } = todo;
				if (isCompleted) {
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
		</CompletedTodosContainer>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});
export default connect(mapStateToProps, null)(CompletedTodos);
