import React from 'react';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import { fetchMissions } from './api/fetchMissions';
jest.mock('./api/fetchMissions');

test("renders without errors", ()=> {
    render(<App/>);
});

test("when button is clicked, 3 missions are displayed", async ()=> {
    //Arrange: Renders App
    render(<App/>);

    //Act:
    // - Find button
    const button = screen.getByRole("button");
    // - Click button
    userEvent.click(button);

    //Asset:
    //  find all mission items
    const missions = await screen.findAllByTestId('mission');
    //  there should be 10
    expect(missions).toHaveLength(10);
});