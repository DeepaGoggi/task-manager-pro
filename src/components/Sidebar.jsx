import React from "react";
import { useState } from "react";
const Sidebar = ({ onFilterChange }) => {
  const handleReset = () => {
    onFilterChange("priority", "");
    onFilterChange("status", "");
  };

  return (
    <div className="bg-light p-3" style={{ minWidth: "200px" }}>
      <h5>Filters</h5>
      <div className="mb-3">
        <label>Priority</label>
        <select
          className="form-select"
          onChange={(e) => onFilterChange("priority", e.target.value)}
          defaultValue=""
        >
          <option value="">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="mb-3">
        <label>Status</label>
        <select
          className="form-select"
          onChange={(e) => onFilterChange("status", e.target.value)}
          defaultValue=""
        >
          <option value="">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button
        className="btn btn-sm btn-secondary mt-2"
        onClick={handleReset}
        type="button"
      >
        Reset Filters
      </button>
    </div>
  );
};
export default Sidebar;
