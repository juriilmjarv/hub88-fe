import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { countries } from './mocks/countries-mock';
import MUITable from '../components/table/Table';

describe('Table component', () => {
	it('renders table with all countries', () => {
		render(<MUITable data={{ countries: countries }} />);

		const { getAllByRole } = within(screen.getByTestId('table-data'));
		expect(getAllByRole('row').length).toEqual(countries.length);
	});

	it('returns filtered country', () => {
		render(<MUITable data={{ countries: countries }} searchValue={'AS'} />);

		const { getAllByRole } = within(screen.getByTestId('table-data'));
		const rows = getAllByRole('row');
		expect(rows.length).toEqual(1);
		expect(rows[0]).toHaveTextContent('American Samoa');
	});

	it('returns message when country does not exist', () => {
		render(<MUITable data={{ countries: countries }} searchValue={'QQ'} />);

		const { getAllByRole } = within(screen.getByTestId('table-data'));
		const rows = getAllByRole('row');
		expect(rows.length).toEqual(1);
		expect(rows[0]).toHaveTextContent('No Records :(');
	});
});
