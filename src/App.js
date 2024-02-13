// import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Программист, разработчик", 31],
  ["Специалист технической поддержки", 15],
  ["Аналитик", 11],
  ["Системный администратор", 10],
  ["Руководитель проектов", 8],
  ["Специалист по информационной безопасности", 5],
  ["Тестировщик", 3],
  ["Менеджер продукта", 3],
  ["Руководитель группы разработки", 2],
  ["Прочие", 12], // CSS-style declaration
];

export const options = {
  title: "Самые востребованные профессии в IT",
  pieHole: 0.4,
  is3D: false,
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      width="100%"
      height="600px"
      data={data}
      options={options}
    />
    </div>
  );
}

export default App;
