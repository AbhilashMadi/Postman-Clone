import React, { useState } from "react";

import RequestPanel from "./components/Panels/RequestPanel/RequestPanel";
import ResponsePanel from "./components/Panels/RequestPanel/RequestPanel";

import "./App.css";

const App = () => {
  
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      <RequestPanel setResponse={setResponse} setLoading={setLoading} />
      <ResponsePanel setResponse={setResponse} setLoading={setLoading} />
    </div>
  );
};

export default App;
