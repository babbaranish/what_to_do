import React from "react";
import { StyledLogo } from "./logo.styles";

export default function Logo({ color }) {
	return (
		<StyledLogo color={color} to='/'>
			What ToDo
		</StyledLogo>
	);
}
