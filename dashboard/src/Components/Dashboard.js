import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [children, setChildren] = useState([]);
  const [finances, setFinances] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    axios.get('/children').then(response => setChildren(response.data.children));
    axios.get('/finances').then(response => setFinances(response.data.finances));
    axios.get('/predictions/enrollments').then(response => setPredictions(response.data.predictions));
  }, []);

  return (
    <div>
      <h2>Children Data</h2>
      <ul>
        {children.map(child => (
          <li key={child.id}>{child.name} (Age: {child.age})</li>
        ))}
      </ul>

      <h2>Financial Overview</h2>
      <ul>
        {finances.map(finance => (
          <li key={finance.date}>Revenue: {finance.revenue}, Expenses: {finance.expenses}</li>
        ))}
      </ul>

      <h2>Enrollment Predictions</h2>
      <ul>
        {predictions.map(pred => (
          <li key={pred.ds}>Date: {pred.ds}, Predicted Enrollments: {pred.yhat}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
