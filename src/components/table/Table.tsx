import React, { useEffect, useState } from 'react';
import * as S from './Table.styled';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Country, Countries } from '../../types';

type TableProps = {
	data: Countries;
	searchValue?: string;
};

const MUITable = ({ data, searchValue }: TableProps) => {
	const [countries, setCountries] = useState<Country[]>(data.countries);

	// filter results on search
	useEffect(() => {
		if (searchValue === undefined) {
			return;
		}

		const filteredRows = data.countries.filter((country: Country) => {
			return country.code.toLowerCase().includes(searchValue.toLowerCase());
		});
		setCountries(filteredRows);
	}, [searchValue]);

	return (
		<S.TableWrapper data-testid="table">
			<Table>
				<TableHead>
					<S.THeaderRow>
						<TableCell width="80%">Country Name</TableCell>
						<TableCell width="20%">Code</TableCell>
						<TableCell />
					</S.THeaderRow>
				</TableHead>
			</Table>
			<S.TBodyWrapper>
				<Table data-testid="table-data">
					<TableBody>
						{!countries.length ? (
							<TableRow>
								<S.NoRecords>No Records :(</S.NoRecords>
							</TableRow>
						) : (
							countries.map((country: Country, index: number) => {
								return (
									<TableRow key={index}>
										<TableCell width="80%">{country.name}</TableCell>
										<TableCell width="20%">{country.code}</TableCell>
									</TableRow>
								);
							})
						)}
					</TableBody>
				</Table>
			</S.TBodyWrapper>
		</S.TableWrapper>
	);
};

export default MUITable;
