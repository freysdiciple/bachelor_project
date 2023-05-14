import '../styles/App.css';
import React, { useState } from "react";
import Header from './Header';
import Single from './Single';
import Multi from './Multi';

const App = () => {
  const [page, setPage] = useState(0);

  return (<div className="page">
    <Header handler={(i) => setPage(i)} page={page}/>
    <div className="body" >
      {
        page === 0 ? <Single /> : <Multi />
      }
    </div>
  </div>)
}

export default App;
