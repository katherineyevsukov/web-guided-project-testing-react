import React from 'react';
import { render, screen } from '@testing-library/react';
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
    console.log(button);
    //3. Assert: Confirm that loading statement exists.
    expect(loadingStatement).toBeInTheDocument();
});

test("renders button when isFetchingData === false", ()=> {

});

test("execute getData when button is clicked", ()=> {

});

