
import './App.css'
import Search from './Search/Search';

function App() {
  const handelOnSearchChange = (searchData) =>{
    console.log(searchData);
  }
  <div className='container'>
  <Search onSearchChange={handelOnSearchChange}/>
  </div>
}

export default App
