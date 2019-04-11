import App from '../App';
import { shallow } from 'enzyme/build';
import React from 'react';

describe('App', () => {
    const props = {
        message: 'hi',
    };

    it('shows a div', () => {
        const element = shallow(<App { ...props } />);

        expect(element.find('.app-container').length).toEqual(1);
    });
});
