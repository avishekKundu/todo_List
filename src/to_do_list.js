import React, { useState } from "react";
import './to_do_list.css';

const TODOLIST = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim() === '')
            return;
        const updateTaskList = [...taskList, task]
        setTaskList(updateTaskList);
        setTask('');
    }

    const removeTask = (index) => {
        const updateTaskList = [...taskList];
        updateTaskList.splice(index, 1);
        setTaskList(updateTaskList);
    }

    return (
        <>
            <div className="main_content">
                <div className="content_head">
                    <center>TO-DO-LIST</center>
                </div>
                <div className="content_body">
                    <div className="body_input">
                        <div className="task_input">
                            <textarea
                                placeholder="Enter task"
                                rows={2} cols={25}
                                value={task} onChange={(e) => setTask(e.target.value)} />
                        </div>
                        <div className="add_btn">
                            <button className="btn btn-primary rounded-1" onClick={addTask}>ADD</button>
                        </div>
                    </div>
                    <div className="taskListContainer">
                        <ul className="list-group" id="task_lists">
                            {taskList.map((task, index) => (
                                <li key={index} className="task_List">
                                    <div className="card p-2">
                                        <div className="card-body" id="cardBody">
                                            <p className="card-text display_Task">TASK: <span>{task}</span></p>
                                            <div className="btnRemove">
                                                <button onClick={() => removeTask(index)} className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TODOLIST;