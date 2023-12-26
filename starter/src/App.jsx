import Tours from "./components/Tours";
import Loading from "./components/Loading";

import React, { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const remove = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const removeAll = () => {
    setTours([]);
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button
            type="button"
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => fetchTours()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} remove={remove} removeAll={removeAll} />
    </main>
  );
};
export default App;
