import React, { useState,useEffect } from "react";
import { Skills } from "../features/members/Skills";
import MainLayout from "../layouts/MainLayout"

function Members() {
  
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
          <button className="btn gap-2">
            Sudo
            <div className="badge badge-warning">MasihGh</div>
          </button>
          <button className="btn gap-2">
            Members
            <div className="badge badge-secondary">12</div>
          </button>
          <label htmlFor="modal-new-member" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg> Create New Member</label>
        </section>
        <div className="divider">Members</div>

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
                <div className="badge badge-primary gap-2 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  info
                </div>
                <div className="badge badge-primary gap-2 mr-2">
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
