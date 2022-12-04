import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { COUNTRIES_QUERY } from '../queries';
import { countries } from './mocks/countries-mock';
import Hub88 from '../components/Hub88';

describe('Test rendering', () => {
	it('renders loading followed by search and table components', async () => {
		const mocks = [
			{
				request: {
					query: COUNTRIES_QUERY
				},
				result: {
					data: {
						countries
					}
				}
			}
		];

		const { getByTestId } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<Hub88 />
			</MockedProvider>
		);

		expect(await getByTestId('loading')).toBeInTheDocument();
		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});
		expect(await getByTestId('search')).toBeInTheDocument();
		expect(await getByTestId('table')).toBeInTheDocument();
	});

	it('renders with error', async () => {
		const failedMock = [
			{
				request: {
					query: COUNTRIES_QUERY
				},
				error: new Error('An error occurred')
			}
		];

		const { findByText } = render(
			<MockedProvider mocks={failedMock} addTypename={false}>
				<Hub88 />
			</MockedProvider>
		);

		expect(await findByText('An error occurred')).toBeInTheDocument();
	});
});
