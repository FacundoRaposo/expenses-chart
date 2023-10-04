import data from '../data/data.json';
import { useState, useEffect } from 'preact/hooks';

export default function BarChart() {
  const [activeDay, setActiveDay] = useState<string>('');

  useEffect(() => {
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const todayLabel = dayLabels[new Date().getDay()];

    setActiveDay(todayLabel.toLowerCase());
  }, []);

  const bars = data.map((expense) => (
    <div key={expense.day} >
      <div
        className={`w-8 text-center rounded-sm bar${expense.day === activeDay ? ' bg-cyan' : ' bg-soft-red'}`}
        style={{ height: `${expense.amount * 2}px` }}
      ></div>
      <div className="bar-label text-center text-medium-brown py-2 text-xs">{expense.day}</div>
    </div>
  ));

  return <div className="bar-chart">{bars}</div>;
}
