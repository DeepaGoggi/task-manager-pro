import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../redux/taskSlice";
import Header from "../components/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.tasks);
  const existingTask = tasks.find((task) => task.id === parseInt(id));

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "To Do",
    deadline: "",
  });

  useEffect(() => {
    if (existingTask) {
      setTask(existingTask);
    }
  }, [existingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) {
      alert("Title is required");
      return;
    }
    dispatch(editTask({ id, updatedTask: task }));
    navigate("/dashboard");
  };

  if (!existingTask) return <p className="m-4">Task not found.</p>;

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h3 className="mb-4">Edit Task</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title *</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Deadline</label>
            <DatePicker
              selected={task.deadline ? new Date(task.deadline) : null}
              onChange={(date) =>
                setTask((prev) => ({
                  ...prev,
                  deadline: date.toISOString(),
                }))
              }
              showTimeSelect
              dateFormat="Pp"
              timeFormat="HH:mm"
              timeIntervals={15}
              className="form-control"
              placeholderText="Select deadline"
              minDate={new Date()}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update Task
          </button>
        </form>
      </div>
    </>
  );
};

export default EditTask;
