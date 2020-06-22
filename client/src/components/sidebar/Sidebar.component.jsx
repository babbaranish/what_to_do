import React from "react";
import { useLocation, withRouter } from "react-router-dom";
import {
	SidebarContainer,
	SidebarItemContainer,
	SidebarItems,
	ItemContainers,
} from "./sidebar.styles";
const Sidebar = ({ match }) => {
	let location = useLocation();
	let path = location.pathname;
	let all, completed, pending;
	if (path === "/dashboard") {
		all = {
			border: "2px solid #ffffff96",
		};
	} else if (path === "/dashboard/completed") {
		completed = {
			border: "2px solid #ffffff96",
		};
	} else if (path === "/dashboard/pending") {
		pending = {
			border: "2px solid #ffffff96",
		};
	}
	return (
		<SidebarContainer>
			<SidebarItemContainer>
				<ItemContainers style={all} to={`${match.path}`}>
					<SidebarItems>All</SidebarItems>
				</ItemContainers>
				<ItemContainers style={pending} to={`${match.path}/pending`}>
					<SidebarItems>Pending</SidebarItems>
				</ItemContainers>
				<ItemContainers
					style={completed}
					to={`${match.path}/completed`}
				>
					<SidebarItems>Completed</SidebarItems>
				</ItemContainers>
			</SidebarItemContainer>
		</SidebarContainer>
	);
};
export default withRouter(Sidebar);
