import React from "react";

const Sidebar = ({ onFilterChange }) => (
  <div className="bg-light p-3" style={{ minWidth: "200px" }}>
    <h5>Filters</h5>
    <div className="mb-3">
      <label>Priority</label>
      <select
        className="form-select"
        onChange={(e) => onFilterChange("priority", e.target.value)}
      >
        <option value="">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <div>
      <label>Status</label>
      <select
        className="form-select"
        onChange={(e) => onFilterChange("status", e.target.value)}
      >
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  </div>
);

export default Sidebar;
