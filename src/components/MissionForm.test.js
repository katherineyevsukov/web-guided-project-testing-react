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
    //3. Assert: Confirm that loading statement exists.
});

test("renders button when isFetchingData === false", ()=> {

});

test("execute getData when button is clicked", ()=> {

});

