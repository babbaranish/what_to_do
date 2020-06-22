import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar.component";
import { Route, Redirect } from "react-router-dom";
import CompletedTodos from "../completedTodos/CompletedTodos.component";
import PendingTodos from "../pendingTodos/PendingTodos.component";
import UserSettings from "../userSettings/UserSettings.component";
import Sidebar from "../sidebar/Sidebar.component";
import Alltodos from "../allTodos/Alltodos.component";
import { DashboardContainer, MenuConatiner } from "./dashboard.styles";
import { connect } from "react-redux";
import UpdateTodo from "../updateTodo/UpdateTodo.component";

const Dashboard = ({ auth, match, updateHidden }) => {
	const [width, setWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		window.addEventListener("resize", updateWitdh);
		return () => window.removeEventListener("resize", updateWitdh);
	});

	const updateWitdh = () => {
		setWidth(window.innerWidth);
	};
	const { path } = match;

	return (
		<DashboardContainer>
			<Navbar />
			{width < 500 ? <MenuConatiner>&#9776;</MenuConatiner> : <Sidebar />}

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
