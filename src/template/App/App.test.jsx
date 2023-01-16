import { screen } from '@testing-library/react';
import Home from '.';
import {renderTheme} from '../../styles/render-theme'


test('renders learn react link', () => {
  const {debug} = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {name: 'olá mundo'}).parentElement;

  expect(headingContainer).toHaveStyleRule({
    background: 'red',
  });
  
  expect(headingContainer).toMatchSnapshot();

});
