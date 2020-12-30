import React from "react";
import { useDispatch, useSelector } from "react-redux";
import JournalEntries from "../JournalEntries";
import { startLogout } from "../../../actions/auth";
import { hideSidebar, showSidebar } from "../../../actions/ui";
import { cleanNotesLogout, startNewNote } from "../../../actions/notes";

const Sidebar = () => {
  const { ui: { x }, auth } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (x === -100) {
      dispatch(showSidebar());
    } else {
      dispatch(hideSidebar());
    }
  };

  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(cleanNotesLogout());
  };

  const handleAddEntry = () => { 
    dispatch(startNewNote());
  }

  return (
    <aside
      className='journal__sidebar'
      style={{
        transform: `translateX(${x}%)`,
        transition: "transform .3s",
      }}
    >
      <div className="journal__sidebar-navbar">
        <h3>
          <i className="far fa-moon"></i>
          <span> {auth.name}</span>
        </h3>
        <div className="" onClick={() => handleToggle()}>
          <i className="fas fa-chevron-right fa-2x"></i>
        </div>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry" onClick={ handleAddEntry } >
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
