import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      cotent: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
    },
    { path: "genre.name", label: "Name" },
    { path: "numberInStock", label: "In Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={this.props.onDelete(movie)}
          className="btn btn-primary"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default MoviesTable;
