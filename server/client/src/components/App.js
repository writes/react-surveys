// Landing
// HEader
// Dashboard
// Survey Now
import React from 'react';
import { BrowserRoute, Route } from 'react-router-dom';

const Header;
const Dashboard;
const ;
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard}/>
          <Route path="/surverys/new" component={SurveyNew}/>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
