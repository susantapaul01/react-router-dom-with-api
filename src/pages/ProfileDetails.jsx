import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = () => {

  let { id } = useParams();
  let [person, getPerson] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
    .then(response => response.json())
    .then(userInfo => getPerson(userInfo));
  },[id]);

  // console.log(Object.values(person['address']))

  return (
    <section>
      <div className="container mx-auto">
          <div className="border border-slate-100 rounded-md shadow-md my-5">
            <div className="p-8">
                <img src={person.image} className="" alt="" />
            </div>
            <div className="">
              <div className="px-8 mb-3">
                  <h2 className="text-2xl capitalize font-bold">profile details</h2>
                  <p className="text-base text-slate-500">You can see the Personal information</p>
              </div>
              <div className="divide-y divide-slate-200">
                <div className="flex px-8 py-5">
                  <dt className="w-1/4 capitalize text-slate-800 font-medium">full name</dt>
                  <dd className="w-3/4 text-slate-700 font-normal">{person.firstName} {person.lastName}</dd>
                </div>
                <div className="flex px-8 py-5">
                  <dt className="w-1/4 capitalize font-medium">age</dt>
                  <dd className="w-3/4 font-normal">{person.age}</dd>
                </div>
                <div className="flex px-8 py-5">
                  <dt className="w-1/4 capitalize font-medium">gender</dt>
                  <dd className="w-3/4 capitalize font-normal">{person.gender}</dd>
                </div>
                <div className="flex px-8 py-5">
                  <dt className="w-1/4 capitalize font-medium">email</dt>
                  <dd className="w-3/4 font-normal">{person.email}</dd>
                </div>
                <div className="flex px-8 py-5">
                  <dt className="w-1/4 capitalize font-medium">phone</dt>
                  <dd className="w-3/4 font-normal">{person.phone}</dd>
                </div>
                <div className="flex px-8 py-5">
                  <dt className="w-1/4 capitalize font-medium">blood group</dt>
                  <dd className="w-3/4 font-normal">{person.bloodGroup}</dd>
                </div>
                <div className="flex px-8 py-5">
                  <dt className="w-1/4 capitalize font-medium">university</dt>
                  <dd className="w-3/4 font-normal">{person.university}</dd>
                </div>
                <div className="flex px-8 py-5">
                  <dt className="w-1/4 capitalize font-medium">address</dt>
                  <dd className="w-3/4 font-normal"></dd>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default ProfileDetails;