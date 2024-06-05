import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";


const MainLayout = () => {
    return (
        <div>
            <div>
                <Home></Home>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;