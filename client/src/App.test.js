import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import PlayerCard from './Components/PlayerCard';
import { render } from '@testing-library/react';
import { Item } from 'semantic-ui-react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('App renders without crashing', () => {
	render(<App />);
});


test('PlayerCard should render without crashing', () => {
	const PlayerCardContainer = render(<PlayerCard />);
	expect(PlayerCardContainer.getByText(/searches/i));
});