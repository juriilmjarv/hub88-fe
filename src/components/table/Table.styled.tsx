import styled from 'styled-components';
import { TableRow } from '@mui/material';

export const TableWrapper = styled.div`
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const THeaderRow = styled(TableRow)`
	background-color: #e3e3e3;
	height: 35px;
`;

export const TBodyWrapper = styled.div`
	overflow: auto;
	height: 60vh;
`;

export const NoRecords = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
