import "./card.css";
import {Bookmark} from 'lucide-react'

export default function Card(props) {
    // console.log(props);
  return ( 
    <>
    
        <div className="card">
         <div>
            <div className="top">
            <img src={props.companyLogo} alt="" />
            <button> Save <Bookmark size={12} /></button>
         </div>
         <div className="center">
            <h3>{props.companyName} <span>{props.postedDate}</span></h3>
            <h2>{props.rolePosition}</h2>
            <div className="tag">
                <h4>{props.jobType}</h4>
                <h4>senior Level</h4>
            </div>
         </div>
         </div>
         <div className="bottom">
            <div className="left">
                <h3>{props.salary}</h3>
                <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
         </div>
        </div>
    </>
  );
}

