import React,{useEffect, Fragment} from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddTechModal from './components/techs/AddTechModal';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/techs/TechListModal';


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const  App =() =>  {
  
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <div className="container">
      <AddBtn/>
      <AddLogModal />
      <EditLogModal/>
      <AddTechModal />
      <TechListModal />
      <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
