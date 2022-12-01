import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { CircularProgress, Stack } from '@mui/material';
import Search from './search/Search';
import MUITable from './table/Table';

const COUNTRIES_QUERY = gql`
	{
		countries {
			name
			code
			emoji
		}
	}
`;

const Hub88 = () => {
	const { data, loading, error } = useQuery(COUNTRIES_QUERY);
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	if (loading)
		return (
			<Stack alignItems="center">
				<CircularProgress />
			</Stack>
		);
	if (error) return <pre>{error.message}</pre>;

	return (
		<>
			<Search onChange={onInputChange} />
			<MUITable data={data} searchValue={inputValue} />
		</>
	);
};

export default Hub88;
