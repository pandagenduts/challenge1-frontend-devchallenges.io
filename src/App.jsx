import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/UI/Layout";
import ButtonPage from "./pages/Button";
import InputPage from "./pages/Input";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "buttons",
          element: <ButtonPage />,
        },
        {
          path: "input",
          element: <InputPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
