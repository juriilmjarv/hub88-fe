import { Container } from '@mui/material';
import Hub88 from './components/Hub88';
import styled from 'styled-components';

const Heading = styled.h1`
	display: flex;
	justify-content: center;
`;

function App() {
	return (
		<Container maxWidth="sm">
			<Heading>Hub88 Home Task</Heading>
			<Hub88 />
		</Container>
	);
}

export default App;
