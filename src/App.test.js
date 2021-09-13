import React from 'react';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test("renders without errors", ()=> {
    render(<App/>);
})