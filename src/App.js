import {Link,Routes,Route} from "react-router-dom"


import Campus from "./component/Campus"
import Name from "./component/Name"
import Contact from "./component/Contact"
export default function App(){
  return(
    <>
    <Link to="/Name">Name</Link>
    <Link to="/Campus"> Campus</Link>
    <Link to="/Contact"> Contact</Link>


    <Routes>
      <Route path="/Name" element={<Name/>}></Route>
      <Route path="/Campus" element={<Campus/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>

    </Routes>

    </>
   
  )
}