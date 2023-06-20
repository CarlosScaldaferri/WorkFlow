import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useRequestData = (path) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  const headers = {
    authorization: token,
  };

  const logInData = (
    body,
    setIsLoading,
    setErrorMessage,
    setBadRequest,
    loadingTimes
  ) => {
    axios
      .get(path, body)
      .then((response) => {
        setIsLoading(true);
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          setIsLoading(false);
          setBadRequest(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (loadingTimes > 0) {
          setIsLoading(true);
          setBadRequest(true);
          if (error.response.data[0].message) {
            setErrorMessage(error.response.data[0].message);
            setIsLoading(false);
          } else {
            setErrorMessage(error.response.data);
            setIsLoading(false);
          }
        }
      });

    return error;
  };

  return {
    logInData,
  };
};
