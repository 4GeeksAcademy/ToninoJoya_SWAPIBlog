import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const Planets = () => {


    const getAllPlanets = async () => {
            fetch("https://www.swapi.tech/api/planets/")
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.error(err))
      
    }

    useEffect(() => {
        getAllPlanets()
    }, [])


    return (
        <div className="container mt-5">
            <h2 className="text-danger">Planets</h2>
            <div className="d-flex flex-row flex-nowrap overflow-auto py-3">
                <div className="card me-3 flex-shrink-0">
                    <img src={rigoImageUrl} className="card-img-top" alt="Card Unica" style={{ height: '150px', objectFit: 'cover' }} />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <div className="d-flex justify-content-between">
                            <a href="#" className="btn btn-outline-primary">Go somewhere </a><button type="button" className="btn btn-outline-warning">@</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}