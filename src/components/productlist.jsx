import { Link } from "react-router-dom";

const Productlist = ({userDetails}) => {
    let {id, firstName, lastName, age, image, email, phone, address} = userDetails;
  return (
    <div className="mb-4">
        <div className="card bg-base-100 shadow-xl rounded-none" >
            <figure>
                <img src={image} alt="Shoes" className="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {firstName + " " + lastName + " (" + age + ")"}</h2>
                <p>Email: {email}</p>
                <p>Mobile: {phone}</p>
                <p className="h-[50px]">Address: {address['address'] + ", " + address['city']}</p>
                <div className="card-actions justify-end">
                    <Link to={`/profiledetails/${id}`}>
                        <button className="px-4 py-2 bg-[#5D3587] border-0 rounded-none text-white text-[16px]">view details</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productlist;