import '../styles/App.css';
import React, { useState } from "react";
import Header from './Header';
import Modal from './Modal';
import Single from './Single';
import Multi from './Multi';

const App = () => {
  const [page, setPage] = useState(0);
  const [db, setDB] = useState(null);

  return (<div className="page">
    <Header handler={(i) => setPage(i)} page={page}/>
    <div className="body" >
      <div className="slider" style={{transform: `translateX(-${50*page}%)`}}>
        <Single />
        <Multi />
      </div>
    </div>
    {db ? <></> : <Modal handler={(firestore) => setDB(firestore)}/>}
  </div>)
}

export default App;
