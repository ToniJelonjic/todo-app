import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import allTasks from "../mocks/tasks.json";
import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import Button from "react-bootstrap/Button";
import "./Home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [newTask, setNewTask] = useState({
    id: null,
    title: null,
    state: null,
  });
  const [addNewTitle, setAddNewTitle] = useState("");
  const [editNewTitle, setEditAddNewTitle] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      console.log("Tasks loaded");
      setTasks(storedTasks);
    } else {
      console.log("Loading mock tasks");
      setTasks(allTasks.tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("tasks, ", tasks);
  }, [tasks]);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    console.log("new tasks: ", updatedTasks);
  };

  const handleChange = (id, newState) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, state: newState } : task
    );
    setTasks(updatedTasks);
  };

  const handleNewTask = () => {
    const updatedTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: addNewTitle,
      state: "todo",
    };
    setTasks((prevTasks) => [...prevTasks, updatedTask]);
    setAddModalShow(false);
    setAddNewTitle("");
    console.log("successfull");
  };

  const handleAddNewTitle = (e) => {
    setAddNewTitle(e.target.value);
  };

  const handleSelectedTask = (task) => {
    setSelectedTask(task);
    setEditModalShow(true);
  };

  const handleEditTitle = (id, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id && task.state === "todo") {
        return { ...task, title: newTitle };
      }
      return task;
    });

    setTasks(updatedTasks);
    setEditModalShow(false);
  };

  const [titleFilter, setTitleFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const titleMatch = task.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const stateMatch = stateFilter === "" || task.state === stateFilter;
    return titleMatch && stateMatch;
  });

  return (
    <div className="row">
      <TaskCard
        tasks={filteredTasks}
        title="All"
        handleDelete={handleDelete}
        showDeleteButton={true}
      />
      <TaskCard
        tasks={tasks.filter((task) => task.state === "todo")}
        title="To Do"
        handleDelete={handleDelete}
        handleSelectedTask={handleSelectedTask}
        showDeleteButton={true}
        showEditButton={true}
        handleEditModalShow={() => setAddModalShow(true)}
      />
      <TaskCard
        tasks={tasks.filter((task) => task.state === "inProgress")}
        title="In Progress"
        handleDelete={handleDelete}
        showDeleteButton={true}
      />
      <TaskCard
        tasks={tasks.filter((task) => task.state === "done")}
        title="Done"
        handleDelete={handleDelete}
        showDeleteButton={true}
      />
      <AddModal
        show={addModalShow}
        onHide={() => setAddModalShow(false)}
        handleNewTask={handleNewTask}
        handleAddNewTitle={handleAddNewTitle}
      />
      <EditModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        selectedTask={selectedTask}
        handleEditTitle={handleEditTitle}
      />

      <div>
        <input
          type="text"
          placeholder="Filter by title"
          className="filter-title-style"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
        <select
          className="filter-state-style"
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
        >
          <option value="">All States</option>
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          className="mt-5 w-50 mb-5"
          variant="primary"
          onClick={() => setAddModalShow(true)}
        >
          Add a new task
        </Button>
      </div>
    </div>
  );
};

export default Home;
