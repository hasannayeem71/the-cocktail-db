import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import useSearch from "../../hooks/useSearch";
import Drink from "../Drink/Drink";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);

  const { text } = useSearch();

  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks.length) {
          setDrinks(data.drinks);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);

  if (!drinks.length) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="grow" className="mt-5 " />
      </div>
    );
  }
  return (
    <div style={{ overflowX: "hidden", padding: "", marginTop: "50px" }}>
      <h2 className="text-center">
        <u
          style={{
            color: "red",
          }}>
          CO
        </u>
        <u>CKTAI</u>
        <u
          style={{
            color: "red",
          }}>
          LS
        </u>
      </h2>

      <Row xs={1} sm={2} md={2} xl={4} lg={3} className="g-4 p-4 ">
        {drinks.map((drink) => (
          <Drink drink={drink} key={drink.idDrink} />
        ))}
      </Row>
    </div>
  );
};

export default Drinks;
