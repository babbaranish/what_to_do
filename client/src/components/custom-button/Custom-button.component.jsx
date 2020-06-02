import React from "react";
import { StyledButton } from "./custom-button.styles";
const CustomButton = ({ children, isColor, isTextColor, isBorderColor }) => {
	return (
		<StyledButton
			isColor={isColor}
			isTextColor={isTextColor}
			hoverColor='#6864e0'
			focused='#5b59b5'
			isBorderColor={isBorderColor}
		>
			{children}
		</StyledButton>
	);
};

export default CustomButton;
