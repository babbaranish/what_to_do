import React from "react";
import { useLocation, withRouter } from "react-router-dom";
import {
	SidebarContainer,
	SidebarItemContainer,
	SidebarItems,
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
				<SidebarItems style={all} to={`${match.path}`}>
					All
				</SidebarItems>
				<SidebarItems style={pending} to={`${match.path}/pending`}>
					Pending
				</SidebarItems>
				<SidebarItems style={completed} to={`${match.path}/completed`}>
					Completed
				</SidebarItems>
			</SidebarItemContainer>
		</SidebarContainer>
	);
};
export default withRouter(Sidebar);
