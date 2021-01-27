import React from "react";

const MoviesForm = (props) => {
  return (
    <React.Fragment>
      <div>Movie Details page ID : {props.match.params.id}</div>{" "}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          props.history.push("/movies");
        }}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default MoviesForm;
