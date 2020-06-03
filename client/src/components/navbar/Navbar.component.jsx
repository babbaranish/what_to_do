import React from "react";
import { Link } from "react-router-dom";

//styles
import {
	StyledNav,
	LogoContainer,
	DashboardLogo,
	NavbarItems,
	NavbarSearch,
	UserSettings,
} from "./navbar.styles";

const Navbar = () => {
	return (
		<StyledNav>
			<LogoContainer>
				<DashboardLogo to='/'>What ToDo</DashboardLogo>
			</LogoContainer>
			<NavbarItems>
				<NavbarSearch name='search' type='text' placeholder='Search' />
				<UserSettings>
					<Link
						to='/dashboard/settings'
						className='las la-user-cog'
					></Link>
				</UserSettings>
			</NavbarItems>
		</StyledNav>
	);
};
export default Navbar;
