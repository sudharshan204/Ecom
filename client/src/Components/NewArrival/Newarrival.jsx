import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../NewArrival/Newarrival.css";

const Layout = () => {
  const [elements, setElements] = useState([]);
  const [category, setCategory] = useState("men");
  const navigate = useNavigate();

  const fetchData = (category) => {
    const apiUrl =
      category === "men"
        ? "http://localhost:3000/api/men"
        : "http://localhost:3000/api/women";

    axios
      .get(apiUrl)
      .then((response) => {
        setElements(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);

  const handleShopNowClick = (element) => {
    navigate(`/product/${element.id}`, { state: { product: element } });
  };

  return (
    <div>
      <div className="new-arrivals-nav">
        <ul>
          <a href="#" onClick={() => setCategory("men")}>
            <li>Men</li>
          </a>
          <a href="#" onClick={() => setCategory("women")}>
            <li>Women</li>
          </a>
          <a href="#">
            <li>Kids</li>
          </a>
          <a href="#">
            <li>New Born</li>
          </a>
         
        </ul>
      </div>
      <div className="new-arrivals-body">
        <div className="new-arrivals-box-section">
          <div className="new-arrivals-box">
            {elements.map((element, index) => (
              <div
                key={index}
                className="box"
                style={{ width: "24rem", height: "23rem" }}
              >
                <img
                  src={element.image}
                  alt={element.Brand}
                  className="box-img" width="15rem" height="20rem"
                />
                <div className="box-content">
                  <h3>{element.Brand}</h3>
                  <p>{element.Category}</p>
                  <p>{element.Price}</p>
                  <button onClick={() => handleShopNowClick(element)}>
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
