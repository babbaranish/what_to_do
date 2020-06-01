import React from "react";
import { FormGroup, Input, Label } from "./form-input.styles";
export default function FormInput({ label, handleChange, ...props }) {
	return (
		<FormGroup>
			<Label>{label}</Label>
			<Input onChange={handleChange} {...props} />
		</FormGroup>
	);
}
