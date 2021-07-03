import React from 'react'
import { HabitGridItem } from './HabitGridItem'

export const HabitGrid = (props) => {
    return (
        <div class="row">
            {props.habits.map(habit => <HabitGridItem updateHabitProgress={props.updateHabitProgress} habit={habit} />)}
        </div>);
}