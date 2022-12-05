import React from 'react';
import { SearchComp } from './Search.styled';

type SearchProps = {
	onChange: React.ChangeEventHandler;
};
const Search = ({ onChange }: SearchProps) => {
	return (
		<SearchComp
			type="search"
			onChange={onChange}
			placeholder="Search by country code ..."
			maxLength={2}
			data-testid="search"
		/>
	);
};

export default Search;
