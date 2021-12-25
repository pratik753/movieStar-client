import React, { useEffect, useState } from "react";
import { getMessage } from "../../action/movie";
import MessageCard from "../Card/MessageCard";
import { useParams } from "react-router";
import { getIpAddress } from "../../api";
const Message = ({ messageChange, setMessageChange }) => {
  let params = useParams();
  const [isLoading, setIsloading] = useState(false);
  const [allMessage, setMessage] = useState([]);
  let tagMessge;
  useEffect(() => {
    // console.log(params.movieId);
    if (params.movieId === undefined) {
      tagMessge = "home";
    } else {
      tagMessge = params.movieId;
    }
    const getAllMessage = async () => {
      setIsloading(false);
      try {
        const ipAddress = await getIpAddress();
        const d = await getMessage(tagMessge);
        const resData = d.data;
        console.log(resData);
        const mdata = [];
        for (const key in resData) {
          // console.log("hii");
          // console.log(ipAddress === resData[key].ipAddress);
          // const iptrueorfalse = (
          //   ipAddress === resData[key].ipAddress
          // ).toString();
          mdata.push({
            id: resData[key]._id,
            name: resData[key].name,
            message: resData[key].message,
            email: resData[key].email,
            ipAddress: ipAddress === resData[key].ipAddress,
            createdAt: resData[key].createdAt,
          });
        }
        setMessage(mdata);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMessage();
    setIsloading(true);
    console.log(messageChange);
  }, [params.movieId, messageChange]);
  console.log(allMessage);
  const messageMap = allMessage.map((data) => (
    <MessageCard
      key={data.id}
      id={data.id}
      name={data.name}
      message={data.message}
      email={data.email}
      ipAddress={data.ipAddress}
      setMessageChange={setMessageChange}
      createdAt={data.createdAt}
    />
  ));
  return <>{isLoading && messageMap}</>;
};

export default Message;
