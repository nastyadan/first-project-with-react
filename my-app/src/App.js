import './App.css';
import { Chart } from "react-google-charts";
import { chartData } from './data/chartData';


function App() {
  return (
    <div className="App">
   Mood during this week
      <Chart
  chartType="PieChart"
  data={chartData}
  width="100%"
  height="400px"
  legendToggle
/>

    </div>
  );
}
export default App;
