
import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import AllStudents from './components/AllStudents';

function App() {
  
  return (
    <Router>
    <div >
       <Header/>
       {/* <AllStudents/> */}
       <Routes>
          <Route path='/' exact Component={AllStudents}/>
          <Route path="/add" exact Component={AddStudent}/>
       </Routes>
        {/* <AddStudent/> */}
    </div>
    </Router>
  );
}

export default App;
