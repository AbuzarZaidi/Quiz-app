import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
        <section
          id="main-page"
          className="d-flex align-items-center justify-content-center pt-5"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 mx-auto">
                <h1>WelCome To My Quiz App</h1>
                <div className="d-flex align-items-center justify-content-evenly mt-5">
                  <Link to='/AddDetail' className="btn btn-secondary btn-lg">Create Quiz</Link>
                  <Link to='/SelectQuiz' className="btn btn-success btn-lg">Start Quiz</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default Home