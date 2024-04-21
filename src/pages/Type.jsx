import { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";

const Type = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/");
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1>Types</h1>
      <div className="type">
        {data.results.map((types, index) => {
          // console.log(types);
          if (types.name !== "unknown") {
            return <button key={index}>{types.name}</button>;
          }
        })}
      </div>
    </>
  );
};
export default Type;
