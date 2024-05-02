import { Link } from "react-router-dom";
import notfoundimage from "../assets/notfoundimage.png";

const Pagenotfound = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <h2>Page Not Found</h2>
      <p>
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </p>
      <Link to="/">
        <p> Back to our site</p>
      </Link>
      <img src={notfoundimage} alt="image page not found" />
    </div>
  );
};
export default Pagenotfound;
