import "./App.css";
import Tabs from "./Components/Tabs.js";
import { useEffect, useState } from "react";
import { v4 as uuid_v4 } from "uuid";
// to have a unique id for each contact to faciliate delete operation
function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('Data')));
 
  useEffect(() => {
    
    
   localStorage.setItem("Data", JSON.stringify(data));
 
 
  }, [data]);
  const addData = (userinput) => {
    setData((data) => ([
      ...data,
       {id:uuid_v4(),...userinput}
    ]));
  
  };
  return (
    <div className="App">
      <Tabs  addData={addData} />
    </div>
  );
}

export default App;
