import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Drink.css";
const Drink = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb, strInstructions } = drink;
  const url = `/details/${idDrink}`;

  const history = useHistory();

  const handleDetails = () => {
    history.push(url);
  };
  return (
    <Col id="cocktails">
      <Card
        className="p-3 card-style"
        style={{
          borderRadius: "20px 40px",
        }}>
        <Card.Img
          style={{
            borderRadius: "20px 40px",
          }}
          variant="top"
          src={strDrinkThumb && strDrinkThumb}
        />
        <Card.Body>
          <Card.Title className="text-center">{strDrink}</Card.Title>
          <Card.Text>
            {strInstructions?.slice(0, 50)}...
            <Button variant="info" onClick={handleDetails}>
              Details
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;
