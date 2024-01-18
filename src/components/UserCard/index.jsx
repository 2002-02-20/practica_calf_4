import React, { useEffect, useState } from "react";
export default function UserCard({}) {
  const [data, setData] = useState();
  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await data.json();
    setData(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data &&
        data.map((iteracion) => (
            
          <li className="container">
            <img src={`https://picsum.photos/seed/${iteracion.id}/300/300`} alt="" />
            <div className="containerText">
            <h3>{iteracion.name}</h3>
            <p>@{iteracion.username}</p>
            <p>{iteracion.email}</p>
            </div>
          </li>
        ))}
    </>
  );
}
