import MainLayout from "../layouts/MainLayout"
import getAllHistory from "../api/HistoryAPI"
import React, { useState, useEffect } from "react";
import Title from "../components/Title";

function History() {
  const [Histories, setHistories] = useState([]);
  useEffect(() => {
    getAllHistory()
      .then(({ data }) => {
        setHistories(data)
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  const actionType = (type) => {
    switch (type) {
      case 'Delete':
        return (<svg xmlns="http://www.w3.org/2000/svg" class="stroke-error flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
        break;
      case 'Create':
        return (<svg xmlns="http://www.w3.org/2000/svg" class="stroke-success flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
        break;
      case 'Update':
        return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>)
        break;
      default:
        return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>)
        break;
    }
  }
  return (
    <MainLayout>

      <div className="card bg-base-300 shadow-xl p-8 ">
        <Title value={Histories.length} title="Histories"/>
        <div>
          {Histories && Histories.map((history, index) => {
            return (

              <div key={index} className="alert shadow-lg mt-5">
                <div>
                  {actionType(history.type)}
                  
                  <div>
                    <h3 className="font-bold">
                      A {history.action} {history.type}ed!
                    </h3>
                    <div className="text-xs">By User: {history.payload && history.payload[1]}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </MainLayout>
  )
}

export default History
