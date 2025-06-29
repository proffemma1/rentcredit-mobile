import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RentCredit</h1>
        <p>Build credit through verified rent payments</p>
        <div className="features">
          <div className="feature">
            <h3>Track Payments</h3>
            <p>Upload rent receipts and track your payment history</p>
          </div>
          <div className="feature">
            <h3>Build Credit</h3>
            <p>Report payments to major credit bureaus</p>
          </div>
          <div className="feature">
            <h3>Financial Growth</h3>
            <p>Monitor your credit score improvement</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
