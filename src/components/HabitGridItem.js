import React from 'react'
import { HabitFormModel } from '../models/HabitFormModel';
import * as timeago from './../../node_modules/timeago.js/dist/timeago.min.js';

export const HabitGridItem = (props) => {
    const habit = new HabitFormModel(props.habit);


    return (<div class="col-md-4">
        <div class="card text-center">
            <div class="card-header">
                {habit.Title}
            </div>
            <div class="card-body">
                <h5 class="card-title">{habit.Description}</h5>
                <p class="card-text">{habit.Done}/{habit.Time} ({(habit.Done * 100 / habit.Time).toFixed(2)} %)</p>
                <button class="btn btn-primary" disabled={habit.Done >= habit.Time} onClick={() => props.updateHabitProgress(habit.Id)}>+1</button>

            </div>
            <div class="card-footer text-muted">
                Created : {timeago.format(habit.Date)}
                {habit.LastUpdatedAt ? (<span>, Last updated : {timeago.format(habit.LastUpdatedAt)}</span>) : null}
            </div>
        </div>
    </div >);

}