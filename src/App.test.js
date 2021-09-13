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
    fetchMissions.mockResolvedValueOnce({
        data:[
            {
                mission_name: 'Thaicom',
                mission_id: '9D1B7E0',
                manufacturers: [Array],
                payload_ids: [Array],
                wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
                website: 'http://www.thaicom.net/en/satellites/overview',
                twitter: 'https://twitter.com/thaicomplc',
                description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.'
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
    expect(missions).toHaveLength(10);
});