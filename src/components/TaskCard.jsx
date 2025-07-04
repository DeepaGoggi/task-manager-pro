import React from "react";
import { Card } from "react-bootstrap";

const TaskCard = ({ task }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{task.title}</Card.Title>
      <Card.Text>
        <strong>Priority:</strong> {task.priority}
        <br />
        <strong>Deadline:</strong> {task.deadline}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default TaskCard;
