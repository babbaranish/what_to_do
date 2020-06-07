import React, { useEffect } from "react";
import { AllTodosContainer } from "./alltodos.styles";
import { getTodos } from "../../redux/todos/todos.action";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Todo from "../todo/Todo.component";
import { Todos } from "./alltodos.styles";
const Alltodos = ({ getTodos, todos: { todos } }) => {
	useEffect(() => {
		console.log("test");
		getTodos();
		console.log("test");
	}, [getTodos]);
	return (
		<AllTodosContainer>
			{todos.map((todo) => {
				return (
					<Todo
						id={todo._id}
						title={todo.todo}
						isCompleted={todo.isCompleted}
					/>
				);
			})}
		</AllTodosContainer>
	);
};

// Alltodos.propTypes = {
// 	getTodos: PropTypes.func.isRequired,
// 	todos: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
	todos: state.todos,
});
export default connect(mapStateToProps, { getTodos })(Alltodos);
