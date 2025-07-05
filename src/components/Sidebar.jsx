import React from "react";
import { useState } from "react";
const Sidebar = ({ onFilterChange }) => {
  const [priorityFilter, setPriorityFilter] = useState([]);
  const [deadlineFilter, setDeadlineFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handlePriorityChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    const updated = checked
      ? [...priorityFilter, value]
      : priorityFilter.filter((p) => p !== value);

    setPriorityFilter(updated);
    onFilterChange("priority", updated);
  };

  const handleDeadlineChange = (e) => {
    const value = e.target.value;
    setDeadlineFilter(value);
    onFilterChange("deadline", value);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange("search", value);
  };

  const resetFilters = () => {
    setPriorityFilter([]);
    setDeadlineFilter("");
    setSearchTerm("");
    onFilterChange("priority", []);
    onFilterChange("deadline", "");
    onFilterChange("search", "");
  };

  return (
    <div className="bg-light p-3" style={{ minWidth: "200px" }}>
      <h5>Filters</h5>
      <div className="mb-3">
        <label className="form-label">Priority</label>
        {["High", "Medium", "Low"].map((level) => (
          <div className="form-check" key={level}>
            <input
              className="form-check-input"
              type="checkbox"
              value={level}
              id={level}
              checked={priorityFilter.includes(level)}
              onChange={handlePriorityChange}
            />
            <label className="form-check-label" htmlFor={level}>
              {level}
            </label>
          </div>
        ))}
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
      <div className="mb-3">
        <label className="form-label">Deadline</label>
        <select
          className="form-select"
          value={deadlineFilter}
          onChange={handleDeadlineChange}
        >
          <option value="">All</option>
          <option value="before">Before Today</option>
          <option value="after">After Today</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Search Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter title"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <button
        className="btn btn-sm btn-secondary mt-2"
        onClick={resetFilters}
        type="button"
      >
        Reset Filters
      </button>
    </div>
  );
};
export default Sidebar;
