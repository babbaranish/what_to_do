import React from "react";
import Navbar from "../navbar/Navbar.component";
import { Route, Redirect } from "react-router-dom";
import CompletedTodos from "../completedTodos/CompletedTodos.component";
import PendingTodos from "../pendingTodos/PendingTodos.component";
import UserSettings from "../userSettings/UserSettings.component";
import Sidebar from "../sidebar/Sidebar.component";
import Alltodos from "../allTodos/Alltodos.component";
import { DashboardContainer } from "./dashboard.styles";

const Dashboard = () => {
	return (
		<DashboardContainer>
			<Navbar />
			<Sidebar />

			<Route
				exact
				path='/dashboard/completed'
				component={CompletedTodos}
			/>
			<Route
				exact
				path='/dashboard'
				render={() => {
					if (localStorage.token) {
						return <Alltodos />;
					}
					return <Redirect to='/' />;
				}}
			/>
			<Route
				exact
				path='/dashboard/pending'
				render={() => {
					if (localStorage.token) {
						return <PendingTodos />;
					}
					return <Redirect to='/' />;
				}}
			/>
			<Route
				exact
				path='/dashboard/settings'
				render={() => {
					if (localStorage.token) {
						return <UserSettings />;
					}
					return <Redirect to='/' />;
				}}
			/>
		</DashboardContainer>
	);
};
export default Dashboard;
