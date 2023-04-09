import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import MainLayout from "../layouts/MainLayout"
import { getAllMembers } from "../api/MemberAPI"
import { CreateTask, getAllTasks } from "../api/TaskAPI"
import config from "../config";
import TaskTableList from "../components/TaskTableList";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

// TEST
import { useSelector, useDispatch } from 'react-redux';
import {
  addTasks,
  addTask,
  TaskList
} from '../features/home/TasksSlice';

function Home() {
  const navigate = useNavigate()

  const tasks = useSelector(TaskList);
  const dispatch = useDispatch();

  const [User, setUser] = useState({ name: 'Selcted User', avatar: '' });
  const [Users, setUsers] = useState([]);
  const [taskData, setTaskData] = useState({
    title: "",
    task: "",
    AsignedUser: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    CreateTask(taskData)
      .then((data) => {
        dispatch(addTask(data.data))
        toast.success('"' + data.data.task + '" ' + 'Created Successfuly!');
      })
      .catch((error) => {
        console.log(error);
        //navigate('/')
        toast.error(error.response.data.msg._message);
      })
  };


  const AvatarSet = () => {
    if (User.avatar) {
      return (
        <div className="avatar">
          <div className="w-8 mask mask-squircle">
            <img src={`${config.FILES_ENDPOINT}${User.avatar}`} alt={`User ${User.avatar} Photo`} />
          </div>
        </div>
      )
    }
  }

  useEffect(() => {
    getAllMembers()
      .then(({ data }) => {
        setUsers(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    getAllTasks()
      .then(({ data }) => {
        dispatch(addTasks(data))
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  return (
    <MainLayout>
      <div className="card bg-base-300 shadow-xl p-8 ">
        <section className="card-actions mx-auto pb-4">
          <label htmlFor="modal-create-task" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg> Create New Task</label>
        </section>

        <input type="checkbox" id="modal-create-task" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative bg-base-200 h-full">
            <label htmlFor="modal-create-task" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Create Task</h3>
            <div className="py-4">
              <form onSubmit={handleSubmit}>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input onChange={(e) => setTaskData({ ...taskData, title: e.target.value })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Task</span>
                  </label>
                  <textarea onChange={(e) => setTaskData({ ...taskData, task: e.target.value })} className="textarea textarea-bordered" placeholder="blaaa blaaaaa"></textarea>
                </div>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">User Asign</span>
                  </label>
                  <div className="dropdown">
                    <label tabIndex="10" className="btn m-1 px-12">
                      {AvatarSet()}
                      <p className="font-bold ml-3">{User.name}</p>
                    </label>
                    <ul tabIndex="10" className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52">
                      {Users && Users.map((user, index) => {
                        return (
                          <li key={index} onClick={(e) => {
                            setUser({ name: user.name, avatar: user.avatar })
                            setTaskData({ ...taskData, AsignedUser: user._id })
                          }}>
                            <div>
                              <div className="avatar">
                                <div className="w-8 mask mask-squircle">
                                  <img src={`${config.FILES_ENDPOINT}${user.avatar}`} alt={`User ${user.avatar} Photo`} />
                                </div>
                              </div>
                              <p className="font-bold">{user.name}</p>
                            </div>
                          </li>)
                      })}

                      <li onClick={(e) => {
                        setUser({ name: 'Select User' })
                        setTaskData({ ...taskData, user: "" })
                      }}>
                        <div>
                          <div className="avatar placeholder">
                            <div className="bg-error-content text-neutral-content w-8 mask mask-squircle">
                              <span className="text-xs">X</span>
                            </div>

                          </div>
                          <p className="font-bold">Clear</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
                <div className="form-control mb-4">
                  <button className="btn btn-secondary">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Title value={tasks.length} title="Tasks" />
        <TaskTableList Users={Users} Tasks={tasks} />

      </div>

    </MainLayout >
  )
}

export default Home
