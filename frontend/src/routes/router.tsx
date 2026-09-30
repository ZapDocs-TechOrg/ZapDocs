import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layouts/app-layout";
import { DashboardPage } from "../pages/dashboard-page";
import { DocumentsPage } from "../pages/documents-page";
import { NotFoundPage } from "../pages/not-found-page";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/documents", element: <DocumentsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
