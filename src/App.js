import { createBrowserRouter, Navigate, redirect, RouterProvider } from "react-router-dom";
import Collaboration from "./Components/Pages/Collaboration/Collaboration";
import Competition from "./Components/Pages/Competition/Competition";
import Discussion from "./Components/Pages/Discussion/Discussion";
import Home from "./pages/Home/Home";
import Ide from "./Components/Pages/Ide/Ide";
import Login from "./pages/Login/Login";
import Problem from "./Components/Pages/Problem/Problem";
import Signup from "./pages/Signup/Signup";
import UserProfile from "./pages/UserProfile/UserProfile";
import AddQuiz from "./pages/AddQuiz/AddQuiz";
import PlayQuiz from "./pages/PlayQuiz/PlayQuiz";
import ForgetPassword from "./Components/Pages/ForgetPassword/ForgetPassword";
import Main from "./Layout/Main";
import AdminRegistrationForm from "./Components/Pages/AdminRegistrationForm/AdminRegistrationForm";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { loadUser } from "./api/authApi";
import Nopage from "./pages/NoPage/Nopage";
import Summarizer from "./pages/Summerizer/Summerizer";
import { Search } from "./pages/Search/Search";
import { Quizs } from "./pages/Quizs/Quizs";







const ProtectedRoute = ({ children }) => {
	const { currentUser } = useContext(AuthContext)

	if (currentUser.isAuthenticated) return children

	return <Navigate to='/login' />

}
const AdminProtectedRoute = ({ children }) => {
	const { currentUser } = useContext(AuthContext)
	if (currentUser?.user?.role === 'admin') return children

	return <Navigate to='/' />

}






function App() {
	const { setCurrentUser } = useContext(AuthContext);
	const handleLoadUser = () => {
		loadUser().then((data) => {
			if (data.success) {
				setCurrentUser({ user: data.user, isAuthenticated: true })
			}

		}).catch((error) => console.log(error))
	}

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
		// {
		// 	path: "/admin",
		// 	element: <AdminRegistrationForm></AdminRegistrationForm>,
		// },
		{
			path: "/admin",
			element: <AdminProtectedRoute><AddQuiz /></AdminProtectedRoute>,
		},
	]);
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
