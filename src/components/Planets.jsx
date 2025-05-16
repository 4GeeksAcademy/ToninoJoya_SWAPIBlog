import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Planets = () => {

    const { store, dispatch } = useGlobalReducer();

    const { planets } = store

    return (
        <div className="container mt-5">
            <h2 className="text-danger">Planets</h2>
            <div className="d-flex flex-row flex-nowrap overflow-auto py-3">
                {
                    planets.map((item) => {
                        return (
                            <div className="card me-3 flex-shrink-0">
                                <img src={rigoImageUrl} className="card-img-top" alt="Card Unica" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.properties.name}</h5>
                                    <p className="card-text">Population: {item.properties.population} <br />Terrain: {item.properties.terrain}</p>
                                    <div className="d-flex justify-content-between">
                                        <a href="#" className="btn btn-outline-primary">Learn more!</a><button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
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