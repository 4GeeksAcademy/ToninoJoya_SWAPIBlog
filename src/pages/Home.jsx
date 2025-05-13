import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="card d-flex flex-columm">
				<img src={rigoImageUrl} className="card-img-top w-25"  alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
						<a href="#" className="btn btn-outline-primary">Go somewhere</a>
					</div>
			</div>
		</div>
	);
}; 