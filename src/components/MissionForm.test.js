import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MissionForm from './MissionForm';

test("renders without an error", ()=> {
    render(<MissionForm/>);
});

test("renders loading message when isFetchingData === true", ()=> {
    //1. Arrange; Render our component
    render(<MissionForm isFetchingData={true}/>);

    //2. Act: find "we are fetching data" statement
    const loadingStatement = screen.queryByText(/we are fetching data/i);
    const button = screen.queryByRole("button");
    
    //3. Assert: Confirm that loading statement exists.
    expect(loadingStatement).toBeInTheDocument();
    // expect(button).not.toBeInTheDocument();
    expect(button).toBeNull();
    expect(button).toBeFalsy();
    expect(button).not.toBeTruthy();
});

test("renders button when isFetchingData === false", ()=> {
    render(<MissionForm isFetchingData={false}/>);

    const loadingStatement = screen.queryByText(/we are fetching data/i);
    const button = screen.queryByRole("button");

    expect(loadingStatement).not.toBeInTheDocument();
    expect(button).toBeInTheDocument();
});

test("execute getData when button is clicked", ()=> {
    //1. Arrange: render MissionForm with isFetchingData === true
    render(<MissionForm isFetchingData={true}/>);

    //2. Act: 
    //    - Find my button
    const button = screen.queryByRole("button");
    //    - Click my button
    userEvent.click(button);

    //3. Assert: ?
});

