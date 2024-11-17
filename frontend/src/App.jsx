import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  const router = createBrowserRouter([
    {path: '/login', element: <LoginPage></LoginPage>}
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
