import './App.css';
import Post from "./Post";
import Header from "./Header";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
   
      <Routes>
        <Route index element={
         <Post/>
        }/>
        <Route path={'/login'} element={
          <main>
            <Header/>
            <div>login page</div>
            
          </main>
        }/>
      </Routes>
      
  );
}

export default App;
