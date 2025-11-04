import "./card.css";
import {Bookmark} from 'lucide-react'

export default function Card(props) {
    console.log(props);
  return ( 
    <>
        <div className="card">
         <div>
            <div className="top">
            <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012015/amazon-logo-rgb.png?itok=FZJ5-sKg" alt="" />
            <button> Save <Bookmark size={12} /></button>
         </div>
         <div className="center">
            <h3>Amazone <span>/5 days ago</span></h3>
            <h2>Seniour  UI/UX Designer</h2>
            <div className="tag">
                <h4>part time</h4>
                <h4>senior Level</h4>
            </div>
         </div>
         </div>
         <div className="bottom">
            <div className="left">
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
         </div>
        </div>
    </>
  );
}

