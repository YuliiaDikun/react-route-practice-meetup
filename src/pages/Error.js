import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);
  return (
    <div>
      <p>Error! This page is not exist.</p>
    </div>
  );
};

export default Error;
