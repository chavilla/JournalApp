import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ShowContext } from "../../context/showContext";
import JournalEntries from "../JournalEntries";

const Sidebar = () => {
    
    let history=useHistory();
    const { show, setShow }=useContext(ShowContext);
    
    const handleLogout=()=>{
        history.push('/auth/login');
    }

  return (
    <aside className={[`journal__sidebar  ${ show  ? 'journal__sidebar-show' :'journal__sidebar-hide' }`]}>
      <div className="journal__sidebar-navbar">
        <h3>
          <i className="far fa-moon"></i>
          <span> Jesús</span>
        </h3>
        <div className="" onClick={()=>setShow(!show)}>
          <i className="fas fa-chevron-right fa-2x"></i>
        </div>
        <button className='btn' onClick={handleLogout}>
            Logout
        </button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
