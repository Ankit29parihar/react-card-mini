import { useState } from 'react'
import './App.css'
import Card from './card'

function App() {

  const jobListings = [
  {
    companyLogo: "https://pngimg.com/d/google_PNG19644.png",
    companyName: "Google",
    postedDate: "2 days ago",
    rolePosition: "Senior Frontend Developer",
    jobType: "Full Time",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    postedDate: "5 days ago",
    rolePosition: "UI/UX Designer",
    jobType: "Full Time",
    salary: "$95/hr",
    location: "Bengaluru, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    companyName: "Meta",
    postedDate: "1 day ago",
    rolePosition: "Full Stack Developer (MERN)",
    jobType: "Part Time",
    salary: "$80/hr",
    location: "Hyderabad, India"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s",
    companyName: "Microsoft",
    postedDate: "3 days ago",
    rolePosition: "Software Engineer",
    jobType: "Full Time",
    salary: "$110/hr",
    location: "Pune, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    postedDate: "4 days ago",
    rolePosition: "Backend Developer (Node.js)",
    jobType: "Full Time",
    salary: "$100/hr",
    location: "Chennai, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1587px-Tesla_Motors.svg.png",
    companyName: "Tesla",
    postedDate: "6 days ago",
    rolePosition: "React Native Developer",
    jobType: "Part Time",
    salary: "$90/hr",
    location: "Delhi, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png",
    companyName: "IBM",
    postedDate: "1 week ago",
    rolePosition: "Cloud Engineer",
    jobType: "Full Time",
    salary: "$105/hr",
    location: "Noida, India"
  },
  {
    companyLogo: "https://cdn-icons-png.flaticon.com/256/3955/3955056.png",
    companyName: "LinkedIn",
    postedDate: "3 days ago",
    rolePosition: "Frontend Developer (React)",
    jobType: "Full Time",
    salary: "$115/hr",
    location: "Gurgaon, India"
  },
  {
    companyLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24760594/Adobe_wordmark.jpg?quality=90&strip=all&crop=0,3.4613147178592,100,93.077370564282",
    companyName: "Adobe",
    postedDate: "2 days ago",
    rolePosition: "Senior UI/UX Designer",
    jobType: "Full Time",
    salary: "$125/hr",
    location: "Bengaluru, India"
  },
  {
    companyLogo: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-index-content-uploads-10.png",
    companyName: "Apple",
    postedDate: "5 days ago",
    rolePosition: "Frontend Developer (Next.js)",
    jobType: "Full Time",
    salary: "$130/hr",
    location: "Pune, India"
  }
];


  return (
    <>
    <div id='cards'>
         {
          jobListings.map(function(elem) {
            return <Card companyLogo={elem.companyLogo} companyName={elem.companyName} postedDate={elem.postedDate} rolePosition={elem.rolePosition} jobType={elem.jobType} salary={elem.salary} location={elem.location} />
          })
         }
    </div>
  
    </>
  )
}

export default App

 