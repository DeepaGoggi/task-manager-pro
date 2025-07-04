import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [filter, setFilter] = useState({ priority: "", status: "" });

  const tasks = [
    {
      id: 1,
      title: "Design UI",
      priority: "High",
      status: "To Do",
      deadline: "2025-07-10",
    },
    {
      id: 2,
      title: "Setup Redux",
      priority: "Medium",
      status: "In Progress",
      deadline: "2025-07-12",
    },
    {
      id: 3,
      title: "Testing",
      priority: "Low",
      status: "Completed",
      deadline: "2025-07-06",
    },
    {
      id: 4,
      title: "Fix Bugs",
      priority: "High",
      status: "To Do",
      deadline: "2025-07-08",
    },
  ];

  const handleLogout = () => {
    console.log("Logged out");
  };

  const handleFilterChange = (type, value) => {
    setFilter((prev) => ({ ...prev, [type]: value }));
  };

  const filteredTasks = (status) =>
    tasks.filter(
      (task) =>
        task.status === status &&
        (filter.priority === "" || task.priority === filter.priority) &&
        (filter.status === "" || task.status === filter.status)
    );

  return (
    <>
      <Header onLogout={handleLogout} />
      <div className="d-flex" style={{ height: "100vh" }}>
        <Sidebar onFilterChange={handleFilterChange} />
        <div className="flex-grow-1 p-4 overflow-auto">
          <Row>
            {["To Do", "In Progress", "Completed"].map((status) => (
              <Col key={status}>
                <h5 className="text-center mb-3">{status}</h5>
                {filteredTasks(status).map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
