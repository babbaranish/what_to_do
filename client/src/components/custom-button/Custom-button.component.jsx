import React from 'react';
import { StyledButton } from './custom-button.styles';
const CustomButton = ({ children }) => {
	return (
		<StyledButton isColor='#5e5bd1' hoverColor='#6864e0' focused='#5b59b5'>
			{children}
		</StyledButton>
	);
};

export default CustomButton;
