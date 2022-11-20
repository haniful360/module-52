
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Countries from './Components/Countries/Countries';
import Country from './Components/Country/Country';
import Header from './Components/Headers/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PostDetails from './Components/PostDetails/PostDetails';
import Posts from './Components/Posts/Posts';
import Userdetails from './Components/Userdetails/Userdetails';
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path = '' element={<Home></Home>}></Route>
        <Route path = 'about' element={<About></About>}></Route>
        <Route path = 'home' element={<Home></Home>}></Route>
        <Route path ="contact" element={<Contact></Contact>}></Route>
        <Route path ='user/:userId' element={<Userdetails></Userdetails>}></Route>
        <Route path ="users" element={<Users></Users>}></Route>
        <Route path='posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path =':country/:countryName' element={<Country></Country>}></Route>
        <Route path = 'countries' element={<Countries></Countries>}></Route>
        <Route path ="*" element={<NotFound></NotFound>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
