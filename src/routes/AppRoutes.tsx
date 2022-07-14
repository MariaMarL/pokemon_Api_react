import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { stateTypeRedux } from "../state/Store";
import NavBarLogged from "./NavBarLogged";
import NavBarOut from "./NavBarOut";


function AppRoutes() {
  
    const {user} = useSelector((state:stateTypeRedux)=> state.LoggedInSlice)

    return (
        <>
        {user === false?
        <NavBarOut/>:
        <NavBarLogged/>}
        </>


    );
  }

  export default AppRoutes