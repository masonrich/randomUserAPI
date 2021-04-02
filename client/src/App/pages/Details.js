import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import UserCard from "../components/UserCard";

const Details = (props) => {
  const { user } = props.location.state;

  return (
    <div className="App">
      <UserCard data={user} />
      <Link to={"../"}>
        <Button className="mt-3" variant="info">
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default Details;
