import React from 'react';
import { shallow } from "enzyme"
import AppRouter from "../../../components/routers/AppRouter";
import '@testing-library/jest-dom';

describe('testing on AppRouter', () => {
    test('should ', () => {
        const wrapper = shallow(
            <AppRouter />
        );

        expect(wrapper).toMatchSnapshot();
    })
    
})