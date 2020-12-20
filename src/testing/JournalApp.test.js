import React from 'react';
import {shallow} from 'enzyme';
import JournalApp from '../JournalApp'

describe('JournalApp component', () => {
    test('should to display the component', () => {
        const wrapper=shallow(<JournalApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
})