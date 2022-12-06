
import './App.css';
import close from "./close.svg"

function App() {

  return (
    <div className="App">
      <div className="title">
        <h2>My Tasks</h2>
      </div>
    
      <div className="input-box">
        <input type="text" placeholder='Add new task' />
        <button>Add</button>
      </div>

      <div className="task-list">
        <div className="task">
          <p>Read Work emails</p>
          <img src={close} alt="" />
        </div>

        <div className="task deactive">
          <p>Workout</p>
          <img src={close} alt="" />
        </div>


        <div className="task">
          <p>Water indoor plant</p>
          <img src={close} alt="" />
        </div>
      </div>


    </div>
  );
}

export default App;
