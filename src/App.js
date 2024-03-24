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
import RequestTutor from "./pages/RequestTotor/RequestTutor";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Navbar from "./Components/Pages/Navbar/Navbar";
import Users from "./pages/Users/Users";
import Students from "./pages/Students/Students";
import { AddQuiz } from "./Components/Pages/AddQuiz/AddQuiz";
import Teachers from "./pages/Teachers/Teachers";
import NewStudents from "./pages/NewStudents/NewStudents";
import { teacherInputs, userInputs } from "./assets/FormData";
import Single from "./pages/Single/Single";
import AddTransactions from "./pages/AddTransactions/AddTransactions";
import JoinAsTutor from "./pages/JoinAsTutor/JoinAsTutor";







const ProtectedRoute = ({ children }) => {

	const { currentUser } = useContext(AuthContext)

	if (currentUser.isAuthenticated) return children


	return <Login />


}
const AdminProtectedRoute = ({ children }) => {
	const { currentUser } = useContext(AuthContext)
	if (currentUser?.user?.role === 'admin') return children

	return <Navigate to='/' />

}






function App() {
	const { setCurrentUser, currentUser } = useContext(AuthContext);

	const handleLoadUser = () => {

		loadUser().then((data) => {

			if (data.success) {
				setCurrentUser({ user: data.user, isAuthenticated: true, loading: false })
			} else {
				setCurrentUser({ isAuthenticated: false, loading: false })
			}

		}).catch((error) => {

			setCurrentUser({ isAuthenticated: false, loading: false })

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
					path: "/requesttutor",
					element: <RequestTutor />
				},
				{
					path: "/joinastutor",
					element: <JoinAsTutor />
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
			element: <ForgetPassword />,
		},
		{
			path: "/admin",
			element: <AdminProtectedRoute><Admin /></AdminProtectedRoute>,
			children: [
				{
					path: "/admin",
					element: <AdminDashboard />
				},
				{
					path: "/admin/users",
					element: <Users />
				}
				,
				{
					path: "/admin/students",
					element: <Students />
				},
				{
					path: "/admin/students/new",
					element: <NewStudents inputs={userInputs} role={'student'} title={"Add New Student"} />
				},
				{
					path: "/admin/students/single/:id",
					element: <Single />
				},
				{
					path: "/admin/students/transaction/:id",
					element: <AddTransactions />
				},
				{
					path: "/admin/quizs",
					element: <AddQuiz />
				},
				{
					path: "/admin/teachers",
					element: <Teachers />
				},
				{
					path: "/admin/teachers/new",
					element: <NewStudents inputs={teacherInputs} role={'teacher'} title={"Add New Teacher"} />
				},

			]
		},


	]);


	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
