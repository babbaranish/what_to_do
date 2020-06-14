import React from "react";

import { UserSettingsContainer } from "./UserSettings.styles";
import { connect } from "react-redux";
import { logoutAsync } from "../../redux/auth/auth.action";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
const UserSettings = ({ logoutAsync }) => {
	return (
		<UserSettingsContainer>
			{logoutAsync()}
			<Redirect to='/login' />
		</UserSettingsContainer>
	);
};

UserSettings.propTypes = {
	logoutAsync: PropTypes.func.isRequired,
};
export default connect(null, { logoutAsync })(UserSettings);
