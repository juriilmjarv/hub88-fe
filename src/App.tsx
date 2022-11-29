import React from 'react';
import './App.css';
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
{
	countries {
		name,
		code
	}
}
`;

function App() {

	const { data, loading, error } = useQuery(FILMS_QUERY);
	console.log(data);
	console.log(loading)

	if (loading) return <>"Loading..."</>;
	if (error) return <pre>{error.message}</pre>

	return (
		<div>
			<h1>Hub88</h1>
			<ul>
				{data.countries.map((launch: any) => (
					<li key={launch.code}>{launch.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
