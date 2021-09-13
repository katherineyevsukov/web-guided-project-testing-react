import React from 'react';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test("renders without errors", ()=> {
    render(<App/>);
});

test("when button is clicked, 3 missions are displayed", ()=> {
    //Arrange: Renders App
    //Act:
    // - Find button
    // - Click button
    //Asset:
    //  find all mission items
    //  there should be 10
});