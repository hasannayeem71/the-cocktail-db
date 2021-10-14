import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

const Random = () => {
  // make and set api calling dependancy here
  let [random, setRandom] = useState(0);
  //set api data here
  let [randomDrink, SetRandomDrink] = useState([]);
  //handle random number genarator for calling api multiple time with dependancy here
  const handleRamdom = () => {
    setRandom((random += 1));
  };
  //calling random api here
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          SetRandomDrink(data.drinks);
        }
      });
  }, [random]);
  randomDrink = randomDrink[0];

  //go to detail using dynamic route with is here
  const history = useHistory();
  const handleDetails = () => {
    history.push(`/details/${randomDrink.idDrink}`);
  };

  return (
    <div>
      <div className="mt-4" id="random">
        <div className="d-flex justify-content-center align-items-center mb-4 ">
          <img
            style={{
              width: "100%",
              margin: "0px auto",
            }}
            className="img-fluid"
            src="https://as2.ftcdn.net/v2/jpg/03/60/90/19/500_F_360901991_qCn2hpsybrsMtlNZs73wyvz2XFWrtd2a.jpg"
            alt=""
          />
        </div>
        <h1 className="text-center">CHOOSE RANDOM COCKTAIL</h1>
        <p className="text-center">
          Click Random button to choose Random Drink
        </p>
      </div>
      {/* after gating data info show here */}
      {randomDrink ? (
        <div className="mt-5 mb-3 p-5 " id="game">
          <div className="d-flex  justify-content-center ">
            <img
              src={randomDrink.strDrinkThumb}
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "20px 40px",
              }}
              alt=""
            />
            <div className="p-5">
              <h1>
                {randomDrink.strDrink} With {randomDrink?.strGlass}
              </h1>
              <p>{randomDrink.strInstructions}</p>
              <Button variant="info" onClick={handleDetails} className="w-25">
                Details
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="grow" className="my-5 " />
        </div>
      )}
      {/* random button for call api multiple time */}
      <div className="d-flex justify-content-center align-items-center mb-5">
        <Button variant="warning" className=" w-25" onClick={handleRamdom}>
          RANDOM
        </Button>
      </div>
    </div>
  );
};

export default Random;
