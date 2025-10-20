import React from "react";
import { useParams } from "react-router-dom";

const Services = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      services : {params.serviceName},{params.id}
    </div>
  );
};

export default Services;
