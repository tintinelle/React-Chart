// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Genre", "Percents"],
  ["Shooter", 27.5],
  ["Action", 22.5],
  ["Role-playing", 12.9],
  ["Sports", 11.7],
  ["Adventure", 7.8],
  ["Fighting", 5.8],
  ["Strategy", 4.3],
  ["Racing", 3.3],
  ["Other", 4.1],
];

export const options = {
  title: "Best selling video games by genre",
  is3D: true,
};

function App() {
  return (
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"400px"}
  />
);
}

export default App;
