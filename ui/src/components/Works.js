import React, { useState, useEffect, useCallback } from 'react';
import dotenv from 'dotenv';
import './Works.css';
dotenv.config();



const Works = () => {
  const [works, setWorks] = useState([]);
  const [editedWork, setEditedWork] = useState();
  const [editedDepartment, setEditedDepartment] = useState();
  const [enteredJob, setEnteredJob] = useState('');
  const [enteredDepartment, setEnteredDepartment] = useState("");

  const getWorks = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:8000/works/');
      const worksData = await response.json();
      setWorks(worksData.works);
    } catch (err) {
      // Error handling would be implemented here
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getWorks();
  }, [getWorks]);

  useEffect(() => {
    if (editedWork) {
      setEnteredJob(editedWork.job);
    }
  }, [editedWork]);

  useEffect(() => {
    if (editedDepartment) {
      setEnteredDepartment(editedDepartment.department);
    }
  }, [editedDepartment]);

  const startEditHandler = (work) => {
    setEditedWork(work);
  };

  const startEditDepartmentHandler = (work) => {
    setEditedDepartment(work);
  };

  const deleteWorkHandler = async (workId) => {
    const response = await fetch('http://localhost:8000/works/' + workId, {
      method: "DELETE",
    });
    const data = await response.json();

    console.log(data);
    getWorks();
  };

  const inputHandler = (event) => {
    setEnteredJob(event.target.value);
  };

  const inputDepartmentHandler = (event) => {
    setEnteredDepartment(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setEditedWork(null);
    setEditedDepartment(null);
    setEnteredJob("");
    setEnteredDepartment("");
    let url = 'http://localhost:8000/works/';
    let method = 'POST';
    if (editedWork) {
      url = url + '/' + editedWork.id;
      method = 'PUT';
    }
    const response = await fetch(url, {
      method,
      body: JSON.stringify({
        job: enteredJob,
        department: enteredDepartment,
        date: new Date(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    getWorks();
  };

  return (
    <React.Fragment>
      <div className="works__form">
        <form onSubmit={submitHandler}>
          <label>JOB QUEUE</label>
          <div>
            <input
              type="text"
              id="job"
              placeholder="Enter a job"
              value={enteredJob}
              onChange={inputHandler}
            />
            <input
              type="text"
              id="department"
              placeholder="Enter a Department"
              value={enteredDepartment}
              onChange={inputDepartmentHandler}
            />
          </div>

          <button type="submit">{editedWork ? "Edit" : "Add"} Work</button>
        </form>
      </div>
      {works && works.length > 0 && (
        <ul className="work__list">
          {works.map((work) => (
            <li key={work.workId}>
              <span>{work.job}</span>
              <span>{work.department}</span>
              <div className="works__actions">
                <button onClick={startEditHandler.bind(null, work)}>
                  Edit
                </button>
                <button onClick={deleteWorkHandler.bind(null, work.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default Works;
