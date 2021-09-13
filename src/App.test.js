import React from 'react';
import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

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
    const missions = screen.queryAllByTestId('mission');
    console.log(missions);
    //  there should be 10
    expect(missions).toHaveLength(10);
});