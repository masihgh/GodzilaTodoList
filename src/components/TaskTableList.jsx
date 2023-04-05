import config from "../config";
import Title from "./Title";

function TaskTableList({ Users, Tasks }) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Users</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users && Users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={`${config.FILES_ENDPOINT}${user.avatar}`} alt={`User ${user.avatar} Photo`} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.is_admin}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <section className="tasks">
                                            {Tasks && Tasks.filter((t) => {
                                                return t.AsignedUser == user._id;
                                            }).map((task, index) => {
                                                return (
                                                    <div className="task" key={index}>
                                                        <div className="task-body">
                                                            <h2 className="card-title">{task.title}</h2>
                                                            <p>{task.task}</p>
                                                            <div className="card-actions mt-3">
                                                                <button className="btn btn-sm btn-primary">Complete</button>
                                                                <button className="btn btn-sm btn-success"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"> <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /> </svg></button>
                                                                <button className="btn btn-sm btn-error"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"> <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /> </svg></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </section>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-8">
            <Title value={''} title="Unassigned Tasks" />
                <section className="tasks">
                    {Tasks && Tasks.filter((t) => {
                        return !Users.map((user) => user._id).includes(t.AsignedUser);
                    }).map((task, index) => {
                        return (
                            <div className="task" key={index}>
                                <div className="task-body">
                                    <h2 className="card-title">{task.title}</h2>
                                    <p>{task.task}</p>
                                    <div className="card-actions mt-3">
                                        <button className="btn btn-sm btn-primary">Complete</button>
                                        <button className="btn btn-sm btn-success"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"> <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /> </svg></button>
                                        <button className="btn btn-sm btn-error"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"> <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /> </svg></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </div>
        </>
    );
}

export default TaskTableList;