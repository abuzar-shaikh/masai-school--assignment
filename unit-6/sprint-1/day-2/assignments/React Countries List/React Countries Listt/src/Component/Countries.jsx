import React from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import CountriesCard from "./CountriesCard";
import { useEffect, useState } from "react";

function Countries() {
  const [datastate, setdatastate] = useState([]);
  const [pageno, setpageno] = useState();
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=2&limit=5&orderBy=desc`
    );
    const data = await res.json();
    // console.log(data.data);
    setdatastate(data.data);
    // console.log(datastate);
  };

  // return <LoadingIndicator />;
  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {
          /* Countries Card */

          datastate.map((elem) => (
            <CountriesCard key={elem.id} elem={elem} />
          ))
        }
      </div>
      <div>{/* Pagination */ <Pagination setpageno={setpageno} />}</div>
    </div>
  );
}

export default Countries;
