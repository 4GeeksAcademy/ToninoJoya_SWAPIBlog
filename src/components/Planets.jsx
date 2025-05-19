import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Planets = () => {

    const { store, dispatch } = useGlobalReducer();

    const { planets } = store

    const handleOnClick = (planetaId) => {

		const planetaEncontrado = planets.find(planeta => planeta._id == planetaId);
		return (
			dispatch({
				type: "SET_FAVORITES",
				payload: planetaEncontrado.properties.name 
			})
		);
	}
    return (
        <div className="container mt-5">
            <h2 className="text-danger">Planets</h2>
            <div className="d-flex flex-row flex-nowrap overflow-auto py-3">
                {
                    planets.map((item) => {
                        return (
                            <div className="card me-3 flex-shrink-0">
                                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${item.uid}.jpg`} className="card-img-top" alt="Card Unica" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.properties.name}</h5>
                                    <p className="card-text">Population: {item.properties.population} <br />Terrain: {item.properties.terrain}</p>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/planetsDetails/${item.uid}`} className="btn btn-outline-primary">Learn more! </Link>
                                        <button type="button" className="btn btn-outline-warning"
                                        onClick={()=>handleOnClick(item._id)}>{
														store.favorites.includes(item.properties.name)?
														<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>

													}</button>
                                    </div>
                                </div>

                            </div>
                        );
                    })
                }

            </div>
        </div>

    );
}