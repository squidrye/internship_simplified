import React, { useState, useEffect } from 'react';

const ListOfJobs = () => {
  const [job, setJobs] = useState([]);
  const [title, setTitle] = useState([]);
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);

  let api = `http://localhost:8080/?search=${title}&location=${location}&country=IN`;
  const fetchApiData = async (e) => {
    console.log('clicked');
    setLoading(true);
    e.preventDefault();
    var response = await fetch(api);
    var json = await response.json();
    var results = setJobs(json['results']);
    setLoading(false);
  }
  useEffect(() => fetchApiData, []);
  return (
    <>
        <div class="container1">
          <h1>Internship Simplified</h1>
          <h2>Find your perfect job today!</h2>
          <form id="search-form" onSubmit={fetchApiData}>
            <input type="text" className="form-control" placeholder='Job Title' id='search' onChange={(e) => setTitle(e.target.value)} />
            <input type="text" className="form-control" placeholder='Location' id='location' onChange={(e) => setLocation(e.target.value)} />
            <button type="submit" class="btn btn-bloc btn-primary">Search</button>
          </form>
        </div>
        {loading &&
          <div class="main">
            <div class="loading-element">
              <img src="./img/45.svg" alt="" />
            </div>
            <div class="result-container"></div>
          </div>
        }
      <div className='container'>
        <div className='row'>
          {
            job.map((value) => {
              return (<div class="card">
                <div className="card-body">
                  <h4 className="card-title">{value.title}</h4>
                  <h5>${value.location.display_name}</h5>
                  <p className="card-text">{value.description}</p>
                  <a href={value.redirect_url}>View Job</a>
                </div>
              </div>);
            })
          }
        </div>
      </div>
    </>
  )
}

export default ListOfJobs
