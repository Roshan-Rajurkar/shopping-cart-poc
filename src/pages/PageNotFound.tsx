import { Link } from "react-router-dom";
import NotFoundImage from '../assets/notfoundpageimage.jpg'

const PageNotFound = () => {
  return (<div className="flex flex-col items-center justify-center">
    <img src={NotFoundImage} alt="Not found" className="w-80 h-64"/>
    <Link to={'/'} className="underline text-blue-600 ">
      Back to home
    </Link>
  </div>);
};

export default PageNotFound;
