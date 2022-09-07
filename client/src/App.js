import React from "react";
import { Route,Routes } from "react-router-dom";

//Custom components
import Layout from "./components/Layout/Layout";
import ListView from "./pages/ListView/ListView";
import DetailView from "./pages/DetailView/DetailView";

function App() {
  return (
    <div className="App">
    <Layout>
      <Routes>
        <Route path="/" element={<ListView/>}/>
        <Route path="/:userId" element={<DetailView/>}/>
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
