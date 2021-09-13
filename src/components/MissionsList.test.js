import React from 'react';
import { screen, render} from '@testing-library/react';
import MissionsList from './MissionsList';

test("renders without errors", () => {
    render(<MissionsList missions={[]}/>);
});


const testMissions = [
    {
        mission_name: "mission 1",
        mission_id: 1
    },
    {
        mission_name: "mission 2",
        mission_id: 2
    }
]

test("renders new tests when passed into component", () => {
    //Arrange 1: renders MissionsList with no missions
    const { rerender } = render(<MissionsList missions={[]}/>)
    //Act 1: gets the missions from our component
    let missions = screen.queryAllByTestId('mission');

    //Assert 1: checks that no missions are on the screen
    expect(missions).toHaveLength(0);

    //Arrange 2: renders MissionsList with 3 missions
    rerender(<MissionsList missions={testMissions}/>);
    //Act 2: gets the missions from our component
    missions = screen.queryAllByTestId('mission');
    //Assert 2: checks that 3 missions are on the screen.
    expect(missions).toHaveLength(2);
})