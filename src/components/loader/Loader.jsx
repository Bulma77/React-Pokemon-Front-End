import "../loader/loader.css";
import pokeball from "../../assets/pokeball.png";

const Loader = () => {
  return (
    <div className="loader">
      <img src={pokeball} className="loading-ball" />
    </div>
  );
};

export default Loader;
