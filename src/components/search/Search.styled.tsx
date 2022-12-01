import styled from 'styled-components';

export const SearchComp = styled.input`
	width: 100%;
	border: none;
	border-radius: 4px;
	background-color: #ffffff;
	font-size: 16px;
	height: 40px;
	outline: none;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	margin: 15px 0;
	text-indent: 10px;
	text-transform: uppercase;

	::-webkit-input-placeholder {
		/* WebKit browsers */
		text-transform: none;
	}
	:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		text-transform: none;
	}
	::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		text-transform: none;
	}
	:-ms-input-placeholder {
		/* Internet Explorer 10+ */
		text-transform: none;
	}
	::placeholder {
		/* Recent browsers */
		text-transform: none;
	}
`;
