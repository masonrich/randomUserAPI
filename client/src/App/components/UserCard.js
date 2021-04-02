import React from "react";
import { Card, Image, ListGroup } from "react-bootstrap";
import * as util from "../functions/utilities";

const UserCard = ({ data }) => {
  return (
    <div>
      <Card
        bg={"light"}
        text={"dark"}
        style={{ width: "35rem", marginLeft: "auto", marginRight: "auto" }}
      >
        <Card.Header>{data.firstName + " " + data.lastName}</Card.Header>
        <Card.Body>
          <Image src={data.image} alt={"Profile pic"} />
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-light">{data.email}</ListGroup.Item>
            <ListGroup.Item className="bg-light">
              {"Phone: " + data.phone}
            </ListGroup.Item>
            <ListGroup.Item className="bg-light">
              {"Born: " + util.formatDate(new Date(data.dob))}
            </ListGroup.Item>
            <ListGroup.Item className="bg-light">
              <p>
                {data.location.street.number + " " + data.location.street.name}
              </p>
              <p>
                {data.location.city +
                  ", " +
                  data.location.state +
                  " " +
                  data.location.postcode}
              </p>
              <p>{data.location.country}</p>{" "}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
