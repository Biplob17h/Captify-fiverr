import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

const App = () => {
  return (
    <div className="text-2xl bg-[#0f172a] min-h-screen text-white max-w-[1600px] mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
