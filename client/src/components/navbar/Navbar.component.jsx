import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { connect } from "react-redux";
import { hideTodo } from "../../redux/hidden/hidden.action";
//styles
import {
	StyledNav,
	LogoContainer,
	DashboardLogo,
	NavbarItems,
	NavbarSearch,
	UserSettings,
	AddButton,
	ButtonContainer,
} from "./navbar.styles";
import CreateTodo from "../createTodo/CreateTodo.component";

const Navbar = ({ hideTodo, hidden }) => {
	return (
		<StyledNav>
			<LogoContainer>
				<DashboardLogo to='/'>What ToDo</DashboardLogo>
			</LogoContainer>
			<NavbarItems>
				<NavbarSearch name='search' type='text' placeholder='Search' />
				<ButtonContainer>
					<AddButton onClick={hideTodo}>
						<Plus />
					</AddButton>
				</ButtonContainer>
				<ButtonContainer>
					<UserSettings>
						<Link
							to='/dashboard/settings'
							className='las la-sign-out-alt'
						></Link>
					</UserSettings>
				</ButtonContainer>
			</NavbarItems>
			{hidden ? null : <CreateTodo />}
		</StyledNav>
	);
};
const mapStateToProps = (state) => ({
	hidden: state.hidden.hidden,
});
export default connect(mapStateToProps, { hideTodo })(Navbar);
