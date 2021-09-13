import React from 'react';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import { fetchMissions } from './api/fetchMissions';
jest.mock('./api/fetchMissions');


render(<App/>);

test("renders without errors", ()=> {
    render(<App/>);
});

test("when button is clicked, 3 missions are displayed", async ()=> {
    fetchMissions.mockResolvedValueOnce({
        data:[
            {
                mission_name: 'Mission 1',
                mission_id: '1'
            },
            {
                mission_name: 'Mission 2',
                mission_id: '2'
            },
            {
                mission_name: 'Mission 23',
                mission_id: '3'
            }
        ]
    });
    
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
    expect(missions).toHaveLength(3);
});