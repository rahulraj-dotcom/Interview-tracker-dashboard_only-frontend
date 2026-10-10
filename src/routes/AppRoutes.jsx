import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import AddQuestionPage from "../pages/AddQuestionPage";
import AllQuestionsPage from "../pages/AllQuestionsPage";
import MainLayouts from "../layoutes/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-question",
        element: <AddQuestionPage />,
      },
      {
        path: "/all-questions",
        element: <AllQuestionsPage />,
      },
    ],
  },
]);

export default router;
