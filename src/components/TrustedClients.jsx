import React from "react";
import clients from "../data/trustedClients.json";
import Image  from "../../public/firstTrustedClient.jpeg";
const TrustedClients = () => {
  return (
    <div className="flex items-center relative h-24">
      {clients?.slice(0,4)?.map((clients, index) => (
        <div
          key={clients.id}
          className={`rounded-full absolute`}
          style={{
            transform: `translate(${index * 45}px)`,
            border: `${index + 3}px solid #E9F7FF`,
            width: `${2*(index + 1) + 76}px`,
            height: `${2*(index + 1) + 76}px`,
          }}
        >
            <img
              src={Image}
              alt={clients.name}
              className="w-full h-full object-cover  rounded-full"
              data-index={index}
            />
        </div>
      ))}
      <img src="../" alt="" />
      <p>{clients.length}</p>
    </div>
  );
};

export default TrustedClients;
