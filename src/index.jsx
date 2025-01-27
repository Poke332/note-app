import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import ActivePage from "./pages/ActivePage.jsx";
import ArchivePage from "./pages/ArchivePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import AddPage from "./pages/AddPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/style.css";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <ActivePage />,
			},
			{
				path: "/archive",
				element: <ArchivePage />,
			},
			{
				path: "/notes/:id",
				element: <DetailsPage />,
			},
			{
				path: "/notes/new",
				element: <AddPage />,
			},
			{
				path: "/register",
				element: <RegisterPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
		],
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
