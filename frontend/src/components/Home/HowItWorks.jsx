import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Sign up for JobZee by providing your basic information, such as your name, email address, and a secure password. Completing your profile will help JobZee tailor job recommendations and enhance your overall experience on the platform.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Explore a wide range of job opportunities tailored to your skills and preferences. JobZee makes it easy for you to discover the perfect job by using advanced filters and algorithms. If you're an employer, post job listings to attract qualified candidates. Highlight key details about the job, such as responsibilities, qualifications, and benefits, to make your listing stand out.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Apply for your dream job with just a few clicks. Customize your application by showcasing your relevant skills and experience. If you're an employer looking to hire, review applications from potential candidates and connect with those who align with your company's needs. JobZee streamlines the recruitment process, making it efficient and straightforward for both job seekers and employers.

JobZee is your one-stop platform for a seamless job search or recruitment experience. Join today and take the next step toward your career goals!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
