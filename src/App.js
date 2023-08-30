import React, { useState } from "react";
import Chatbot from "./components/chatbot/Chatbot";
import "./App.css";
import QuestionEditor from "./components/QuestionEditor";
import DialogFlowContext from "./DialogFlowContext";

const App = () => {
  const [jsonData, setJsonData] = useState([]);
  return (
    <DialogFlowContext.Provider value={{jsonData, setJsonData}}>
        <main className="py-3">
          <div style={{background:"white"}}>
            <div className="bot">
              <Chatbot/>
            </div>
            <QuestionEditor />
          </div>
        </main>
    </DialogFlowContext.Provider>
  );
};

export default App;
