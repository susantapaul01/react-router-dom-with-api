import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Productlist from './components/productlist';
import './App.css';

function App() {
  let [list, setList] = useState([]);
  let [loading, setLoading] = useState(true);

  let dataFetch = () => {
    setLoading(true);
    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(user => setList(user.users))
    setLoading(false);
  }

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
            {
              loading ? 
                ( 
                  <div className='text-center'>
                      <span className="loading loading-ring loading-lg"></span>
                  </div>
                ) :
                <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-x-4'>
                  {
                    list.map((item) => (
                      <Productlist userDetails={item} key={item.id} />
                        )
                      )
                  }
                </div>
            }
      </div>
    </>
  )
}

export default App;
