import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const Planets = () => {

    return (
        <div className="container mt-5">
            <h2 className="text-danger">Planets</h2>
            <div className="d-flex flex-row flex-nowrap overflow-auto py-3">
                <div className="card me-3 flex-shrink-0" style={{ width: '18rem' }}>
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