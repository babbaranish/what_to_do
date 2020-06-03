import React from "react";
import {
	SidebarContainer,
	SidebarItemContainer,
	SidebarItems,
} from "./sidebar.styles";
const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarItemContainer>
				<SidebarItems to='/dashboard'>All</SidebarItems>
				<SidebarItems to='/dashboard/pending'>Pending</SidebarItems>
				<SidebarItems to='/dashboard/completed'>Completed</SidebarItems>
			</SidebarItemContainer>
		</SidebarContainer>
	);
};
export default Sidebar;
