import React from "react";
import { useLocation } from "react-router-dom";
import {
	SidebarContainer,
	SidebarItemContainer,
	SidebarItems,
} from "./sidebar.styles";
const Sidebar = () => {
	let location = useLocation();
	let path = location.pathname;
	let all, completed, pending;
	if (path == "/dashboard") {
		all = {
			border: "2px solid #ffffff96",
		};
	} else if (path == "/dashboard/completed") {
		completed = {
			border: "2px solid #ffffff96",
		};
	} else if ("/dashboard/pending") {
		pending = {
			border: "2px solid #ffffff96",
		};
	}
	return (
		<SidebarContainer>
			<SidebarItemContainer>
				<SidebarItems style={all} to='/dashboard'>
					All
				</SidebarItems>
				<SidebarItems style={pending} to='/dashboard/pending'>
					Pending
				</SidebarItems>
				<SidebarItems style={completed} to='/dashboard/completed'>
					Completed
				</SidebarItems>
			</SidebarItemContainer>
		</SidebarContainer>
	);
};
export default Sidebar;
