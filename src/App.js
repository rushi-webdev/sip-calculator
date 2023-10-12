import React, { useState, useEffect } from 'react'
import BarChart from './BarChart';
import "./App.css";
import InputElement from './InputElement';


const App = () => {
  const data = [
    5,
    8,
    10,
    12,
    15,
    18,
    20,
    22,
    25,
    28,
    30,
    35,
  ];
  let [result, setResult] = useState([{
    am: 500,
    r: 12,
    du: [
      5,
      8,
      10,
      12,
      15,
      18,
      20,
      22,
      25,
      28,
      30,
      35,
    ]
  }]);

  // console.log(result.r)

  const handleSubmit = (e) => {
    e.preventDefault();
    const r = rate / (12 * 100);
    const t = duration * 12;
    const futureValue = amount * (Math.pow(1 + r, t) - 1) / r * (1 + r);
    setResult([result.am = amount, result.r = rate, result.du = data]);
    setInvestment(futureValue);
    setInvestValue(duration * amount * 12);
    chart();

  }
  const [amount, setAmount] = useState(500);
  const [duration, setDuration] = useState(10);
  const [rate, setRate] = useState(12);
  const [investment, setInvestment] = useState(60000);
  const [investValue, setInvestValue] = useState(56170);


  const [chartData, setChartData] = useState({
    datasets: [{
      label: "Users Gained",
      data: [investment, investValue],
    }]
  });

// console.log(result[0])
// console.log(result[1])
// console.log(result[0].du)

  const chart = () => {
    setChartData({
      labels: ["Investment", "Gain"],
      datasets: [{
        data: [investValue, parseInt(investment - investValue)],
        backgroundColor: [
          "#75E6DA",
          "#FFAEBC",
        ],
        hoverBorderColor: [
          "#75E6DA",
          "#FFAEBC",
        ],
        hoverBackgroundColor: [
          "#75E6DA",
          "#FFAEBC",
        ],
        hoverBorderWidth: 3,
        offset: 15,
        borderRadius: 5
      }
      ]
    })
  };
  useEffect(() => {
    chart();
  }, [investment, investValue])

  function IndianRupeeFormatter({ amount }) {
    const formattedRupees = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

    return <span>{formattedRupees}</span>;
  }




  return (
    <>
      <div className='container'>
        <div className='calculator-container'>
          <h1 style={{ color: "rgb(68,71,91)", fontSize: "1.7rem", fontFamily: "AR One Sans" }}>SIP Calculator</h1>
          <div className='calculator-hero'>
            <div className='calc-func'>
              <div style={{ marginLeft: "2rem", flex: "1" }} className='input-container'>
                <InputElement title="Monthly Investment" step="500" min="500" max="100000" setValue={setAmount} value={amount} />
                <InputElement title="Expected return rate" step="0.01" min="1" max="30" setValue={setRate} value={rate} />
                <InputElement title="Time Period" step="1" min="1" max="30" setValue={setDuration} value={duration} />
                <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
                  <button onClick={handleSubmit} className='btn'>Calculate</button>
                </div>

                <div style={{ marginTop: "2rem", display: "flex", justifyContent: "space-around"}}>
                  <div>
                    <p>Investment Amount:</p>
                    <p> Est. return: </p>
                    <p> Total Value: </p>
                  </div>
                  <div style={{ fontWeight: "500", color: "rgb(68,71,91)" }}>
                    <p>{<IndianRupeeFormatter amount={investment} />}</p>
                    <p>{<IndianRupeeFormatter amount={investValue} />}</p>
                    <p>{<IndianRupeeFormatter amount={investValue + investment} />}</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "4rem" }} className='doughbar-container'>
                <div>
                  <BarChart chartData={chartData} />
                </div>
              </div>
            </div>
            <div className='table-data' style={{width:"40vw" }}>
              <table>
                <thead>
                  <tr>
                    <th>Duration</th>
                    <th>Amount</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item} year <br /></td>
                      <td>{amount}</td>
                      <td>
                        <IndianRupeeFormatter amount={amount * (Math.pow(1 + (rate / (12 * 100)), (item * 12)) - 1) / (rate / (12 * 100)) * (1 + (rate / (12 * 100))) + (item * amount * 12)} />
                      </td>
                    </tr>
                  ))}

                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )


}

export default App