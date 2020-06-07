import styled from "styled-components";
export const AllTodosContainer = styled.section`
	margin-left: 21%;
	padding-top: 100px;
	padding-right: 20px;
`;

export const Todos = styled.div`
	color: #515154;
	padding: 1em;
	border-bottom: 1px solid #00000038;
	text-transform: capitalize;
	&:hover {
		color: #222;
		border-bottom: 1px solid black;
		cursor: pointer;
		font-weight: bold;
	}
`;
