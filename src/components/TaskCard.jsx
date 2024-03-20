import React, { useState } from "react";
import "./TaskCard.css";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import EditModal from "./AddModal";

const TaskCard = ({
  tasks,
  title,
  handleDelete,
  handleSelectedTask,
  showDeleteButton,
  showEditButton,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log(modal);
    setModal(!modal);
  };

  return (
    <div className="col-lg-3">
      <h1 className="all-tasks-title">{title}</h1>
      <div className="all-tasks">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <div className="row">
              <div className="col-lg-9 col-md-9 col-9">
                <p className="single-task-title">{task.title}</p>
              </div>
              <div className="col-lg-3 col-md-3 col-3 icons-style">
                {showEditButton && task.state === "todo" && (
                  <img
                    className="edit"
                    src={Edit}
                    alt=""
                    onClick={() => handleSelectedTask(task)}
                  />
                )}
                {showDeleteButton && (
                  <img
                    className="delete"
                    src={Delete}
                    alt=""
                    onClick={() => handleDelete(task.id)}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        {/* {title === "All" && <button>Add new task</button>} */}
      </div>
    </div>
  );
};

export default TaskCard;
