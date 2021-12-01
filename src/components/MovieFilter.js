import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MovieRequest } from "../thunk/movie";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { setMovieFilters } from "../action";
export const Movies = (prop) => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const { records, filters } = useSelector((state) => state.Movies.movie);
    const AllMovie = useSelector((state) => state.Movies.movie.records)
    const handleChangeFilter = (event) => {
        const { value, name } = event.target;
        dispatch(setMovieFilters({ [name]: value }));
        console.log("filters",filters)
    };
    useEffect(() => {
        const getMovie = () => {
            dispatch(MovieRequest(filters));

        };
        getMovie();
    }, [filters.limit]);

    return (
        <>
            <div>

                <select name="limit" value={filters.limit} onChange={handleChangeFilter}>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                    <option value={400}>400</option>
                    <option value={500}>500</option>
                </select>


                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Movie Name</th>
                            <th>BudgetInMillions</th>
                            <th>RuntimeInMinutes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllMovie.map((movie) => (
                            <tr>
                                <td>{movie._id}</td>
                                <td>{movie.name}</td>
                                <td>{movie.budgetInMillions}</td>
                                <td>{movie.runtimeInMinutes}</td>
                                <td> <Link className="btn btn-primary" to={`/MovieQuote/${movie._id}`}>MovieQuote</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        </>
    )
}