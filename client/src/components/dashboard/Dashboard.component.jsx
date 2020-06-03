import React from "react";
import Navbar from "../navbar/Navbar.component";
import { Route } from "react-router-dom";
import CompletedTodos from "../completedTodos/CompletedTodos.component";
import PendingTodos from "../pendingTodos/PendingTodos.component";
import UserSettings from "../userSettings/UserSettings.component";
import Sidebar from "../sidebar/Sidebar.component";
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
			<Route exact path='/dashboard/pending' component={PendingTodos} />
			<Route exact path='/dashboard/settings' component={UserSettings} />
		</DashboardContainer>
	);
};
export default Dashboard;
