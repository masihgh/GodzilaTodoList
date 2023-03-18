import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementByAmount,
    remove,
    selectCount,
} from './skillsSlice';

export function Skills() {
    const skill = useSelector(selectCount);
    const dispatch = useDispatch();
    const [NewSkill, setNewSkill] = useState('');
    return (
        <div>

            <div className="form-control w-full mb-6">
                <label className="label">
                    <span className="label-text">Skills</span>
                </label>
                <label className="input-group">
                    <button className="btn-primary btn btn-sm" onClick={() =>{
                        dispatch(incrementByAmount(NewSkill))
                        setNewSkill('')}
                    }>Add</button>
                    <input type="text" value={NewSkill} onChange={e => setNewSkill(e.target.value)} className="input input-bordered input-sm w-full" />
                </label>
            </div>
            <div className="mb-6 gap-3">
                {skill && skill.map((c, i) => {
                    return (
                        <div key={i} className="badge badge-primary gap-2 mr-2" onClick={() => {dispatch(remove(c))}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            {c}
                        </div>
                    )
                })
                }

            </div>


        </div>
    );
}
