import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/taskSlice";
function Dashboard() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ priority: "", status: "" });
  const tasks = useSelector((state) => state.task.tasks);
  useEffect(() => {
    if (tasks.length === 0) {
      const demoTasks = [
        {
          title: "Design UI",
          description: "Create initial wireframes and color scheme.",
          priority: "High",
          status: "To Do",
          deadline: "2025-07-10",
        },
        {
          title: "Setup Redux",
          description: "Configure Redux store and slices.",
          priority: "Medium",
          status: "In Progress",
          deadline: "2025-07-12",
        },
        {
          title: "Fix Login Bug",
          description: "Login page not redirecting after auth.",
          priority: "High",
          status: "To Do",
          deadline: "2025-07-09",
        },
        {
          title: "Testing",
          description: "Write unit tests for task components.",
          priority: "Low",
          status: "Completed",
          deadline: "2025-07-05",
        },
        {
          title: "Deploy to Vercel",
          description: "Deploy the app and test routing.",
          priority: "Medium",
          status: "In Progress",
          deadline: "2025-07-15",
        },
      ];

      demoTasks.forEach((task) => dispatch(addTask(task)));
    }
  }, [dispatch, tasks.length]);

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
      <Header />
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
