import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionForm from './MissionForm';

test("renders without an error", ()=> {
    render(<MissionForm/>);
});

test("renders loading message when isFetchingData === true", ()=> {
    
});

test("renders button when isFetchingData === false", ()=> {

});

test("execute getData when button is clicked", ()=> {

});

