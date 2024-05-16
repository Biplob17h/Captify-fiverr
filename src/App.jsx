import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";


const App = () => {
  
  
  return (
    <div className="text-2xl bg-black min-h-screen text-white  mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </div>
  );
};

export default App;
