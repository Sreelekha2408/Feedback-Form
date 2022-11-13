/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch } from 'react-router';
import './form.css';
import React from "react";
import { FeedBack } from './FeedBack';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FeedBackTable } from './FeedBackTable';

function App() {
  return (
    <><div className="main_section">  </div >
        <Switch>
            <Route path="/" component ={FeedBack}/>
            <Route path="/feedBackForm" component ={FeedBack}/>
            <Route path="/feedBackTable" component ={FeedBackTable} showForm={true}/>
        </Switch>
        </>
  );
}
export default App;