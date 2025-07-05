import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/taskSlice";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    priority: [],
    status: "",
    deadline: "",
    search: "",
  });
  const tasks = useSelector((state) => state.task.tasks);

  useEffect(() => {
    if (tasks.length === 0 && !localStorage.getItem("tasks")) {
      const demoTasks = [
        {
          id: 1,
          title: "Design UI",
          description: "Create initial wireframes and color scheme.",
          priority: "High",
          status: "To Do",
          deadline: "2025-07-12T16:45:00+05:30",
        },
        {
          id: 2,
          title: "Setup Redux",
          description: "Configure Redux store and slices.",
          priority: "Medium",
          status: "In Progress",
          deadline: "2025-07-12T16:45:00+05:30",
        },
        {
          id: 3,
          title: "Fix Login Bug",
          description: "Login page not redirecting after auth.",
          priority: "High",
          status: "To Do",
          deadline: "2025-07-09T05:00:00+05:30",
        },
        {
          id: 4,
          title: "Testing",
          description: "Write unit tests for task components.",
          priority: "Low",
          status: "Completed",
          deadline: "2025-07-05T09:15:00+05:30",
        },
        {
          id: 5,
          title: "Deploy to Vercel",
          description: "Deploy the app and test routing.",
          priority: "Medium",
          status: "In Progress",
          deadline: "2025-07-15T18:00:00+05:30",
        },
      ];

      demoTasks.forEach((task) => dispatch(addTask(task)));
    }
  }, [dispatch, tasks.length]);

  const handleFilterChange = (type, value) => {
    setFilter((prev) => ({ ...prev, [type]: value }));
  };

  const filteredTasks = (status) => {
    return tasks.filter((task) => {
      const taskDeadline = new Date(task.deadline);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const matchesStatus = task.status === status;
      const matchesPriority =
        filter.priority.length === 0 || filter.priority.includes(task.priority);
      const matchesDeadline =
        filter.deadline === "" ||
        (filter.deadline === "before" && taskDeadline < today) ||
        (filter.deadline === "after" && taskDeadline >= today);
      const matchesSearch =
        filter.search === "" ||
        task.title.toLowerCase().includes(filter.search.toLowerCase());

      const matchesStatusFilter =
        filter.status === "" || task.status === filter.status;

      return (
        matchesStatus &&
        matchesStatusFilter &&
        matchesPriority &&
        matchesDeadline &&
        matchesSearch
      );
    });
  };
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
