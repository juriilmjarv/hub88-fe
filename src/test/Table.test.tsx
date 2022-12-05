import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { countries } from './mocks/countries-mock';
import MUITable from '../components/table/Table';

const getTableRows = () => {
	const { getAllByRole } = within(screen.getByTestId('table-data'));
	return getAllByRole('row');
};

describe('Table component', () => {
	it('renders table with all countries', () => {
		render(<MUITable data={{ countries: countries }} />);
		const rows = getTableRows();

		expect(rows.length).toEqual(countries.length);
	});

	it('returns filtered country', () => {
		render(<MUITable data={{ countries: countries }} searchValue={'AS'} />);
		const rows = getTableRows();

		expect(rows.length).toEqual(1);
		expect(rows[0]).toHaveTextContent('American Samoa');
	});

	it('returns message when country does not exist', () => {
		render(<MUITable data={{ countries: countries }} searchValue={'QQ'} />);
		const rows = getTableRows();

		expect(rows.length).toEqual(1);
		expect(rows[0]).toHaveTextContent('No Records :(');
	});
});
