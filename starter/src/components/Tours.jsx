import Tour from "./Tour";

const Tours = ({ tours, remove, removeAll }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} remove={remove} />;
        })}
      </div>
      <div className="title">
        <button className="btn" onClick={() => removeAll()}>
          remove all
        </button>
      </div>
    </section>
  );
};

export default Tours;
