import React from 'react';
import { screen, render} from '@testing-library/react';
import MissionsList from './MissionsList';

test("renders without errors", () => {
    render(<MissionsList missions={[]}/>);
});

test("renders new tests when passed into component", () => {
    //Arrange 1: renders MissionsList with no missions
    render(<MissionsList missions={[]}/>)
    //Act 1: gets the missions from our component
    const missions = screen.queryAllByAltText('mission');

    //Assert 1: checks that no missions are on the screen
    expect(missions).toHaveLength(0);

    //Arrange 2: renders MissionsList with 3 missions
    //Act 2: gets the missions from our component
    //Assert 2: checks that 3 missions are on the screen.
})