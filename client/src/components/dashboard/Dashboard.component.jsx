import React from "react";
import Navbar from "../navbar/Navbar.component";
import { Route, Redirect } from "react-router-dom";
import CompletedTodos from "../completedTodos/CompletedTodos.component";
import PendingTodos from "../pendingTodos/PendingTodos.component";
import UserSettings from "../userSettings/UserSettings.component";
import Sidebar from "../sidebar/Sidebar.component";
import Alltodos from "../allTodos/Alltodos.component";
import { DashboardContainer } from "./dashboard.styles";
import { connect } from "react-redux";
import UpdateTodo from "../updateTodo/UpdateTodo.component";

const Dashboard = ({ auth, match, updateHidden }) => {
	const { path } = match;
	console.log(path, match);
	return (
		<DashboardContainer>
			<Navbar />
			<Sidebar />
			{updateHidden ? null : <UpdateTodo />}
			<Route
				exact
				path={`${match.path}`}
				render={() => {
					if (auth) {
						return <Alltodos />;
					} else {
						return <Redirect to='/login' />;
					}
				}}
			/>
			<Route
				path={`${match.path}/completed`}
				render={() => {
					if (auth) {
						return <CompletedTodos />;
					} else {
						return <Redirect to='/login' />;
					}
				}}
			/>
			<Route
				path={`${match.path}/pending`}
				render={() => {
					if (auth) {
						return <PendingTodos />;
					} else {
						return <Redirect to='/login' />;
					}
				}}
			/>
			<Route
				exact
				path='/dashboard/settings'
				render={() => {
					if (auth) {
						return <UserSettings />;
					} else {
						return <Redirect to='/login' />;
					}
				}}
			/>
		</DashboardContainer>
	);
};
const mapStateToProps = (state) => ({
	updateHidden: state.hidden.updateHidden,
	auth: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, null)(Dashboard);
