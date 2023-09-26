import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Collaboration from "./Components/Pages/Collaboration/Collaboration";
import Competition from "./Components/Pages/Competition/Competition";
import Discussion from "./Components/Pages/Discussion/Discussion";
import Home from "./Components/Pages/Home/Home";
import Ide from "./Components/Pages/Ide/Ide";
import Login from "./Components/Pages/Login/Login";
import Problem from "./Components/Pages/Problem/Problem";
import Signup from "./Components/Pages/Signup/Signup";
import UserProfile from "./Components/Pages/UserProfile/UserProfile";
import ForgetPassword from "./Components/Pages/ForgetPassword/ForgetPassword";

import Main from "./Layout/Main";
import AdminRegistrationForm from "./Components/Pages/AdminRegistrationForm/AdminRegistrationForm";

import { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { AuthContext } from "./context/AuthContext";
import AddQuiz from "./Components/Pages/AddQuiz/AddQuiz";
import PlayQuiz from "./Components/Pages/PlayQuiz/PlayQuiz";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext)


	useEffect(() => {
		if (currentUser && currentUser.uid) {
			const fetchData = async () => {
				try {
					const res = await getDoc(doc(db, 'users', currentUser.uid));
					const user = res.data();
					console.log(user, 'darshan');
					if (!user.isAdmin) {

						navigate('/playquiz');
					}
				} catch (error) {
					console.log(error);
				}
			};

			fetchData();
		}
		else {
			navigate("/")
		}

	}, []);


	return children;

}

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			children: [
				{
					path: "/",
					element: <Home></Home>,
				},
				{
					path: "/profile",
					element: <UserProfile></UserProfile>,
				},
				{
					path: "/collaboration",
					element: <Collaboration></Collaboration>,
				},
				{
					path: "/competition",
					element: <Competition></Competition>,
				},
				{
					path: "/discussion",
					element: <Discussion></Discussion>,
				},
				{
					path: "/ide",
					element: <Ide></Ide>,
				},

				{
					path: "/problems",
					element: <Problem></Problem>,
				},

				{
					path: "/playquiz",
					element: <ProtectedRoute><PlayQuiz></PlayQuiz></ProtectedRoute>,
				},

			],
		},
		{
			path: "/login",
			element: <Login></Login>,
		},
		{
			path: "/signup",
			element: <Signup></Signup>,
		},
		{
			path: "/forgetpassword",
			element: <ForgetPassword></ForgetPassword>,
		},
		{
			path: "/admin",
			element: <AdminRegistrationForm></AdminRegistrationForm>,
		},
		{
			path: "/addquiz",
			element: <ProtectedRoute><AddQuiz></AddQuiz></ProtectedRoute>,
		},
	]);
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
