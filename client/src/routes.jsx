import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateLead from "./pages/CreateLead";
import LeadDetails from "./pages/LeadDetails";

const AppRoutes = ()=>{

return(

<Routes>

<Route path="/login" element={<Login/>} />

<Route path="/" element={ <ProtectedRoute> <Dashboard/> </ProtectedRoute> }/>

<Route path="/leads" element={ <ProtectedRoute> <Leads/> </ProtectedRoute> }/>

<Route path="/create" element={ <ProtectedRoute> <CreateLead /> </ProtectedRoute> }/>

<Route path="/lead/:id" element={<ProtectedRoute><LeadDetails/></ProtectedRoute>}/>


</Routes>

);
};

export default AppRoutes;