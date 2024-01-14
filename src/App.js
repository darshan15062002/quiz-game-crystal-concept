import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserProfile from "./pages/UserProfile/UserProfile";

import PlayQuiz from "./pages/PlayQuiz/PlayQuiz";
import Main from "./Layout/Main";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { loadUser } from "./api/authApi";
import Nopage from "./pages/NoPage/Nopage";
import Summarizer from "./pages/Summerizer/Summerizer";
import { Search } from "./pages/Search/Search";
import { Quizs } from "./pages/Quizs/Quizs";
import Admin from "./pages/Admin/Admin";







const ProtectedRoute = ({ children }) => {
	const { currentUser } = useContext(AuthContext)

	if (currentUser.isAuthenticated) return children

	return

}
const AdminProtectedRoute = ({ children }) => {
	const { currentUser } = useContext(AuthContext)
	if (currentUser?.user?.role === 'admin') return children

	return <Navigate to='/' />

}






function App() {
	const { setCurrentUser, currentUser } = useContext(AuthContext);
	const handleLoadUser = () => {
		setCurrentUser({ isAuthenticated: false, loading: true })
		loadUser().then((data) => {

			if (data.success) {
				setCurrentUser({ user: data.user, isAuthenticated: true, loading: false })
			} else {
				setCurrentUser({ isAuthenticated: false, loading: false })
				alert(data.message)
			}

		}).catch((error) => {

			setCurrentUser({ isAuthenticated: false, loading: false })
			alert("You are not authenticated")
		})
	}

	console.log(currentUser);


	useEffect(() => {
		handleLoadUser()
	}, []);


	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			errorElement: <Nopage />,
			children: [
				{
					path: "/",
					element: <Home></Home>,
				},
				{
					path: "/profile",
					element: <ProtectedRoute><UserProfile></UserProfile></ProtectedRoute>,
				},
				{
					path: "/playquiz",
					element: <ProtectedRoute>
						<PlayQuiz />
					</ProtectedRoute>
				},
				{
					path: "/quiz/:id",
					element:
						<Quizs />

				},

				{
					path: "/summarizer",
					element: <ProtectedRoute> <Summarizer /></ProtectedRoute>
				},
				{
					path: "/search",
					element: <Search />
				},
				{
					path: "/admin",
					element: <AdminProtectedRoute><Admin /></AdminProtectedRoute>,
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


	]);

	if (currentUser.loading === true) return <div className="h-screen bg-black flex justify-center items-center">Loading....</div>
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
