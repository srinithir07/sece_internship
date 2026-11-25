import "./App.css";

function App() {

  let players_data = [
    { name: "Virat Kohli", team: "India", role: "Batsman", age: 37 },
    { name: "MS Dhoni", team: "India", role: "Wicket Keeper", age: 45 },
    { name: "Sachin Tendulkar", team: "India", role: "Batsman", age: 53 },
    { name: "Rohit Sharma", team: "India", role: "Batsman", age: 39 }
  ];

  return (
    <>
      <h1 className="heading">Indian Cricket Players</h1>

      <div className="container">
        {players_data.map((player, index) => (
          <div className="card" key={index}>
            <h2>{player.name}</h2>
            <p>Team: {player.team}</p>
            <p>Role: {player.role}</p>
            <p>Age: {player.age}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;