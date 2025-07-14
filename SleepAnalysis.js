import React, { useState } from "react";
import "./SleepAnalysis.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SleepAnalysis = () => {
  const [formData, setFormData] = useState({
    bedtime: "",
    wakeupTime: "",
    awakenings: "",
    awakeningDuration: "",
    sleepQuality: "",
    sleepLatency: "",
  });

  const [sleepData, setSleepData] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalTimeInBed = calculateTimeDifferenceInMinutes(formData.bedtime, formData.wakeupTime);
    const totalSleepTime =
      totalTimeInBed - parseFloat(formData.awakeningDuration) - parseFloat(formData.sleepLatency);
    const sleepEfficiency = (totalSleepTime / totalTimeInBed) * 100;

    setSleepData({
      totalTimeInBed: totalTimeInBed.toFixed(2),
      totalSleepTime: totalSleepTime.toFixed(2),
      sleepEfficiency: sleepEfficiency.toFixed(2),
    });

    setFeedback(generateFeedback(totalSleepTime, sleepEfficiency, formData.sleepLatency));
  };

  const calculateTimeDifferenceInMinutes = (startTime, endTime) => {
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);
    let diff = (end - start) / (1000 * 60); // Difference in minutes
    return diff > 0 ? diff : diff + 1440; // Adjust for overnight sleep
  };

  const generateFeedback = (totalSleepTime, sleepEfficiency, sleepLatency) => {
    let feedback = "Based on your input:\n";
    if (sleepEfficiency < 85) feedback += "- Your sleep efficiency is low. Consider improving sleep hygiene.\n";
    if (sleepLatency > 30) feedback += "- It takes you too long to fall asleep. Try relaxation techniques.\n";
    if (totalSleepTime < 360) feedback += "- You’re not sleeping enough. Aim for 7-8 hours (420-480 minutes) of sleep.\n";
    return feedback || "Your sleep metrics look good!";
  };

  const createChartData = (label, value, color) => ({
    labels: [label],
    datasets: [
      {
        label: `${label} (in minutes)`,
        data: [value],
        backgroundColor: color,
        borderColor: color.replace("0.2", "1"),
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="sleep-analysis-container" style={{backgroundImage: "url('https://i.ibb.co/qLSqkKWM/piclumen-1751298037548.png'),background-color:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))"}}> 
    <div className="sleep-analysis">
      <h1>Sleep Analysis</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Bedtime: <input type="time" name="bedtime" value={formData.bedtime} onChange={handleChange} required />
        </label>
        <label>
          Wake-up Time: <input type="time" name="wakeupTime" value={formData.wakeupTime} onChange={handleChange} required />
        </label>
        <label>
          Number of Awakenings:{" "}
          <input type="number" name="awakenings" value={formData.awakenings} onChange={handleChange} required />
        </label>
        <label>
          Duration of Awakenings (minutes):{" "}
          <input
            type="number"
            name="awakeningDuration"
            value={formData.awakeningDuration}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Sleep Quality (1-5):{" "}
          <input
            type="number"
            name="sleepQuality"
            min="1"
            max="5"
            value={formData.sleepQuality}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Sleep Latency (minutes):{" "}
          <input type="number" name="sleepLatency" value={formData.sleepLatency} onChange={handleChange} required />
        </label>
        <button type="submit">Analyze Sleep</button>
      </form>

      {sleepData && (
        <div className="results">
          <h2>Results</h2>
          <p><strong>Total Time in Bed:</strong> {sleepData.totalTimeInBed} minutes</p>
          <p><strong>Total Sleep Time:</strong> {sleepData.totalSleepTime} minutes</p>
          <p><strong>Sleep Efficiency:</strong> {sleepData.sleepEfficiency}%</p>

          <h3>Feedback</h3>
          <pre>{feedback}</pre>

          <div className="chart-container">
            <h3>Total Time in Bed</h3>
            <Bar
              data={createChartData("Total Time in Bed", sleepData.totalTimeInBed, "rgba(75, 192, 192, 0.2)")}
              options={{ scales: { y: { beginAtZero: true } } }}
            />
          </div>

          <div className="chart-container">
            <h3>Total Sleep Time</h3>
            <Bar
              data={createChartData("Total Sleep Time", sleepData.totalSleepTime, "rgba(255, 159, 64, 0.2)")}
              options={{ scales: { y: { beginAtZero: true } } }}
            />
          </div>

          <div className="chart-container">
            <h3>Sleep Efficiency</h3>
            <Bar
              data={createChartData("Sleep Efficiency", sleepData.sleepEfficiency, "rgba(153, 102, 255, 0.2)")}
              options={{
                scales: {
                  y: {
                    suggestedMax: 100,
                    beginAtZero: true,
                    ticks: { callback: (value) => `${value}%` },
                  },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SleepAnalysis;
