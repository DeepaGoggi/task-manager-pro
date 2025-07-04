import React from "react";
import { Card } from "react-bootstrap";

const TaskCard = ({ task }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{task.title}</Card.Title>
      <Card.Text>
        <strong>Priority:</strong> {task.priority}
        <br />
        <strong>Status:</strong> {task.status}
        <br />
        <strong>Deadline:</strong> {task.deadline || "N/A"}
      </Card.Text>
      {task.description && (
        <>
          <hr />
          <p>{task.description}</p>
        </>
      )}
    </Card.Body>
  </Card>
);

export default TaskCard;
