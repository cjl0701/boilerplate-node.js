import React, { useEffect } from "react";
import axios from "axios";

// You can think of these components as "pages"
function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response));
  }, []);

  const onLogoutHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) props.history.push("/login");
      else alert("Failed to logout");
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>
      <button onClick={onLogoutHandler}>logout</button>
    </div>
  );
}

export default LandingPage;
