import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";

const Details = () => {
  const { drinkID } = useParams();
  const [drink, setDrink] = useState([]);
  let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDrink(data.drinks[0]);
      });
  }, [url]);
  console.log(drink);

  return (
    <div className="mt-5 mx-auto ">
      <Card>
        <Card.Body>
          <Card.Text>
            <div className="">
              <h1 className="text-center">
                {drink.strDrink} with {drink.strGlass}
              </h1>
              <h4>Category : {drink.strCategory}</h4>
              <p>{drink.strInstructions}</p>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src={drink.strDrinkThumb}
          style={{
            borderRadius: "30px",
            maxHeight: "500px ",
            maxWidth: "500px",
            margin: "20px auto",
            padding: "10px",
          }}
        />
        <Button className="disabled">BUY NOW</Button>
      </Card>
    </div>
  );
};

export default Details;
