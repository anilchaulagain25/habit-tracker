import 'bootstrap/dist/css/bootstrap.min.css'
import './components/HabitForm';
import { HabitForm } from './components/HabitForm';
import { useEffect, useState } from 'react';
import { Service } from './Service';
import { HabitGrid } from './components/HabitGrid';
import { Utils } from './Utils';

function App() {
  const service = new Service();
  const [habits, setHabits] = useState(service.getExistingHabits());
  const habitFormOnSubmit = (model) => {
    model.Id = model.Id || Utils.uuidv4();
    model.Date = new Date();
    setHabits((state, props) => ([...state, model]));

  };
  const updateHabitProgress = (id) => {
    const item = habits.find(habit => habit.Id === id);
    if (item.Done < item.Time) {
      item.Done = item.Done + 1;
      item.LastUpdatedAt = new Date();
      setHabits([...habits]);
    }
  }
  useEffect(() => { service.setExistingHabits(habits); }, [habits]);

  return (
    <div class="container">
      <div class="py-5">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <h1>HABIT TRACKER</h1>
            <HabitForm onSubmit={habitFormOnSubmit} />
            <hr />
          </div>
          <div class="col-md-8 mx-auto">
            <HabitGrid habits={habits} updateHabitProgress={updateHabitProgress} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
