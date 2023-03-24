import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import User from "./Pages/User";
import Error from "./Pages/Error";
import { Provider } from "react-redux";
import store from "./store";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSuccess } from "./Features/sliceLogin";
import { useDispatch } from "react-redux";
import getUserProfile from "./userAct";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<IsTokenRefresh />
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/user/login" element={<Login />}></Route>
					<Route
						path="/user/profile"
						element={
							<ProtectedRoute>
								<User />
							</ProtectedRoute>
						}
					></Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</Provider>
	);
}

const ProtectedRoute = ({ redirectPath = "/", children }) => {
	const { isAuth } = useSelector((state) => state.login);
	if (!isAuth) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};

const IsTokenRefresh = () => {
	const dispatch = useDispatch();

	if (localStorage.getItem("token")) {
		dispatch(loginSuccess());
		getUserProfile(dispatch);
	}
};

export default App;
