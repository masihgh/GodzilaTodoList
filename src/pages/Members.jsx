import React, { useState, useEffect } from "react";
import { getAllMembers } from "../api/MemberAPI";
import { Skills } from "../features/members/Skills";
import MainLayout from "../layouts/MainLayout"
import config from "../config";
import Title from "../components/Title";

import { useSelector, useDispatch } from 'react-redux';
import {
  addMembers,
  addMember,
  MemberList
} from '../features/members/membersSlice';
import { getAllTasks } from "../api/TaskAPI";


function Members() {
  const users = useSelector(MemberList);
  const dispatch = useDispatch();

  const [Tasks, setTasks] = useState([]);
  const [Query, setQuery] = useState('');

  useEffect(() => {
    getAllTasks()
      .then(({ data }) => {
        setTasks(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    getAllMembers()
      .then(({ data }) => {
        dispatch(addMembers(data))
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const [memberData, setMemberData] = useState({
    name: "",
    age: "",
    github: "",
    linkedin: "",
    avatar: "",
    language: "",
    skills: {},
  });

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(memberData);
    // const data = new FormData();
    // data.append('file', memberData.avatar)
    // console.warn(memberData.avatar);
    // let url = "http://localhost:8000/upload.php";

    // axios.post(url, data, { // receive two parameter endpoint url ,form data 
    // })
  };

  return (
    <MainLayout>
      <div className="card bg-base-300 shadow-xl p-8 ">
        <section className="card-actions mx-auto pb-4">
          <div class="form-control">
            <div class="input-group">
              <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search…" class="input input-bordered" />
              <button class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
          <button className="btn gap-2">
            Sudo
            <div className="badge badge-warning">MasihGh</div>
          </button>
          <label htmlFor="modal-new-member" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg> Create New Member</label>
        </section>
        <Title value={users.filter(member => member.name.includes(Query)).length} title="Members" />
        <div className="members">
          {users && users.filter(member => member.name.includes(Query)).map((user, index) => {
            return (
              <div className="member" key={index}>
                <div className="member-body">
                  <div className="flex space-x-3 flex-col">
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img src={`${config.FILES_ENDPOINT}${user.avatar}`} alt={`User ${user.avatar} Photo`} />
                      </div>
                      <div>
                        <p className="font-bold ml-3">{user.name}</p>
                        <p className="ml-3 text-sm"><span className="text-sm opacity-50">Age: </span><span className="text-sm opacity-100">{user.age}</span></p>
                        <p className="ml-3 text-sm"><span className="text-sm opacity-50">Language: </span><span className="text-sm opacity-100">{user.language}</span></p>
                      </div>
                    </div>
                    <div><span className="text-sm opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> </svg></span> <span className="text-sm opacity-100"> {user.github}</span></div>
                    <br />
                    <div><span className="text-sm opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /> </svg></span><span className="text-sm opacity-100">{user.linkedin}</span></div>
                  </div>
                  <div className="my-3">
                    <div className="text-sm opacity-50">Skills:</div>
                    {user.skills && user.skills.map((skill) => {
                      return (
                        <div className="badge badge-ghost mr-2 mb-2">{skill}</div>
                      )
                    })
                    }

                  </div>
                  <div className="my-3">
                    <div className="text-sm opacity-50">Tasks:</div>
                    {Tasks && Tasks.filter((t) => {
                      return t.AsignedUser == user._id;
                    }).map((task, index) => {
                      return (
                        <div key={index} className={`badge badge-${(task.isDone) ? 'success' : 'primary'} mr-2 mb-2`}>{task.title}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
      <input type="checkbox" id="modal-new-member" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-base-200">
          <label htmlFor="modal-new-member" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Create New Member</h3>
          <div className="py-4">
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input onChange={(e) => setMemberData({ ...memberData, name: e.target.value })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
              </div>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input onChange={(e) => setMemberData({ ...memberData, age: e.target.value })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
              </div>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Github Profile</span>
                </label>
                <input onChange={(e) => setMemberData({ ...memberData, github: e.target.value })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
              </div>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Linkedin Profile</span>
                </label>
                <input onChange={(e) => setMemberData({ ...memberData, linkedin: e.target.value })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full" />
              </div>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Avatar Photo</span>
                </label>
                <input onChange={(e) => setMemberData({ ...memberData, avatar: e.target.files[0] })} type="file" className="file-input file-input-bordered file-input-sm w-full" />
              </div>
              {/* <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text">Skills</span>
                </label>
                <label className="input-group">
                  <button className="btn-primary btn btn-sm">Add</button>
                  <input type="text" placeholder="info@site.com" className="input input-bordered input-sm w-full" />
                </label>
              </div>
              <div className="mb-6 gap-3">
                <div className="badge badge-primary gap-2 mr-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  info
                </div>
                <div className="badge badge-primary gap-2 mr-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  success
                </div>
                
              </div> */}
              <Skills />
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text">Language</span>
                </label>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">English</span>
                    <input onChange={() => setMemberData({ ...memberData, language: 'english' })} type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                  </label>
                </div>
                <div className="form-control mb-4">
                  <label className="label cursor-pointer">
                    <span className="label-text">Persian</span>
                    <input onChange={() => setMemberData({ ...memberData, language: 'persian' })} type="radio" name="radio-10" className="radio checked:bg-secondary" />
                  </label>
                </div>
              </div>
              <div className="form-control mb-4">
                <button className="btn btn-secondary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </MainLayout>
  )
}

export default Members
