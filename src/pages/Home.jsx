import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Planets } from "../components/Planets.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const { characters } = store

	
	
	return (
		<>
			<div className="container mt-5">
				<h2 className="text-danger">Characters</h2>
				<div className="d-flex flex-row flex-nowrap overflow-auto py-3">
					{
						characters.map((item) => {
							return (
								<>

									<div className="card me-3 flex-shrink-0 p-4">
										<img src={rigoImageUrl} className="card-img-top" alt="Card Unica" />
										<div className="card-body"></div>
										<h5 className="card-title p-2">{item.properties.name}</h5>
										<p className="card-text p-2">Gender: {item.properties.gender} <br /> Hair color: {item.properties.hair_color} <br /> Eye-color: {item.properties.eye_color} </p>
										<div className="d-flex justify-content-between">
											<a href="#" className="btn btn-outline-primary">Go somewhere </a><button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
										</div>
									</div>
								</>
							);
						})
					};
				</div>


			</div >
			<Planets />
		</>
	);
};
