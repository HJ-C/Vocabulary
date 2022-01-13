import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Emptypage from './component/EmptyPage';
import CreateWord from './component/CreateWord';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
            <Route exact path="/">
            <DayList></DayList>
            </Route>
            <Route path="/day/:day">
            <Day></Day>
            </Route>
            <Route path="/CreateWord">
              <CreateWord></CreateWord>
            </Route>
            <Route>
              <Emptypage></Emptypage>
            </Route>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
