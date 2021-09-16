
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import login from './screens/login'
import password from './screens/password'
import hrdashboard from './screens/hrdashboard'
function App() {
  return (
    <div >
     <Router>
        <Switch>
          
          <Route path="/login" component={login} />
          <Route path="/password" component={password} />
          <Route path="/hrdashboard" component={hrdashboard}/>
        </Switch>
          </Router>
    </div>
  );
}

export default App;
