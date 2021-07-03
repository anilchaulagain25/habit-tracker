import React, { useState } from 'react';
import { HabitFormModel } from '../models/HabitFormModel';
export const HabitForm = (props) => {
    const [model, setModel] = useState(new HabitFormModel());
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(model);
        setModel(new HabitFormModel());
    };
    return (<div>
        <form onSubmit={handleSubmit}>

            <div class="form-group row">
                <div class="col-sm-3">
                    <label for="txtTitle">Title</label>
                    <input class="form-control" value={model.Title} onChange={(event) => setModel((state, props) => ({ ...state, Title: event.target.value }))} id="txtTitle" name="Title" required="required" type="text" />
                </div>
                <div class="col-sm-6">
                    <label for="txtDescription">Description</label>
                    <input class="form-control" value={model.Description} onChange={(event) => setModel((state, props) => ({ ...state, Description: event.target.value }))} required="required" id="txtDescription" type="text" />
                </div>

            </div>
            <div class="form-group row">
                <div class="col-sm-3">
                    <label for="txtTime">Time</label>
                    <input max="999" class="form-control" value={model.Time} min="1" onChange={(event) => setModel((state, props) => ({ ...state, Time: event.target.value }))} required="required" id="txtTime" type="number" />
                </div>
                <div class="col-sm-6">
                    <label for="ddlPeriod">Period</label>
                    <select class="form-control" value={model.Period} onChange={(event) => setModel((state, props) => ({ ...state, Period: event.target.value }))} required="required" id="ddlPeriod">
                        <option value="D">Day</option>
                        <option value="M">Month</option>
                        <option value="Y">Year</option>
                    </select>
                </div>
                <div class="col-sm-2">
                    <input type="submit" style={{ 'margin-top': '23px' }} class="btn btn-primary" value="Save" />
                </div>
            </div>
        </form>
        {/* <form onSubmit={handleSubmit}>
            <h1>Enter your habit details ::</h1>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label for="txtTitle">Title</label>
                        </td>
                        <td>
                            <input value={model.Title} onChange={(event) => setModel((state, props) => ({ ...state, Title: event.target.value }))} id="txtTitle" name="Title" required="required" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="txtDescription">Description</label>
                        </td>
                        <td>
                            <input value={model.Description} onChange={(event) => setModel((state, props) => ({ ...state, Description: event.target.value }))} required="required" id="txtDescription" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="txtTime">Time</label>
                        </td>
                        <td>
                            <input max="999" value={model.Time} min="1" onChange={(event) => setModel((state, props) => ({ ...state, Time: event.target.value }))} required="required" id="txtTime" type="number" />
                        </td>
                        <td>
                            <select value={model.Period} onChange={(event) => setModel((state, props) => ({ ...state, Period: event.target.value }))} required="required" id="ddlPeriod">
                                <option value="D">Day</option>
                                <option value="M">Month</option>
                                <option value="Y">Year</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Add" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form> */}
    </div>);
};