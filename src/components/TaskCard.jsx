import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const TaskCard = ({ task }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{task.title}</Card.Title>
      <Card.Text>
        <strong>Priority:</strong> {task.priority}
        <br />
        <strong>Status:</strong> {task.status}
        <br />
        <strong>Deadline:</strong>{" "}
        {new Date(task.deadline).toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        })}
      </Card.Text>
      {task.description && (
        <>
          <hr />
          <p>{task.description}</p>
        </>
      )}
      <Link to={`/edit/${task.id}`}>
        <button className="btn btn-sm btn-warning mt-2">Edit</button>
      </Link>
    </Card.Body>
  </Card>
);

export default TaskCard;
