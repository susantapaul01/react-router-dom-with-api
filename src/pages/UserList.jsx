import { useEffect, useState } from 'react';
import Productlist from '../components/productlist';

const UserList = () => {
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

export default UserList;