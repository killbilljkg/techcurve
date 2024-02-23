
import { useState } from 'react';
import './App.css';
import DatePicker from './components/datePicker';
import { endOfDay, startOfDay } from 'rsuite/esm/utils/dateUtils';

function App() {
  const [selectedDate, setSelectedDate] = useState([startOfDay(new Date()), endOfDay(new Date()-1)])
  return (
    <div className="App">
          <DatePicker bgColor={'green'} setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>
    </div>
  );
}

export default App;
