import MainLayout from "../layouts/MainLayout"

function Members() {

  return (
    <MainLayout>
      <div className="card bg-base-300 shadow-xl p-8 ">
        <section className="card-actions mx-auto pb-4">
          <button class="btn gap-2">
            Sudo
            <div class="badge badge-warning">MasihGh</div>
          </button>
          <button class="btn gap-2">
            Members
            <div class="badge badge-secondary">12</div>
          </button>
          <label htmlFor="modal-new-member" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg> Create New Member</label>
        </section>
        <div class="divider">Members</div>

      </div>
      <input type="checkbox" id="modal-new-member" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative bg-base-200">
            <label htmlFor="modal-new-member" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Create New Member</h3>
            <div className="py-4">
              <form action="">
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Age</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Github Profile</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Linkedin Profile</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mb-4">
                  <label className="label">
                    <span className="label-text">Avatar Photo</span>
                  </label>
                  <input type="file" className="file-input file-input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">English</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                  </label>
                </div>
                <div className="form-control mb-4">
                  <label className="label cursor-pointer">
                    <span className="label-text">Persian</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-secondary" checked />
                  </label>
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
