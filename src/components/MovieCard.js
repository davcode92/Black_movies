import React from "react";
import { Button, Card } from "react-bootstrap";
import EditMovie from "./EditMovie";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/action";
import StarRating from "./StarRating";

const MovieCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem", margin: "20px" }}>
        <Card.Img
          variant="top"
          src={el.image}
          style={{ width: "100%", height: "350px" }}
        />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            {el.date}<Card.Title><StarRating rating={el.rating} /></Card.Title>
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              variant="danger"
              onClick={() => dispatch(deleteMovie(el.id))}
            >
              Suprimer
            </Button>
            <EditMovie el={el} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
