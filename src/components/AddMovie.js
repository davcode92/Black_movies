import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/action";

const AddMovie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //________________________________________________________________________________________
  //Movies input States:
  const [name, setName] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState("");
 //Functions:
 const dispatch = useDispatch();
 const handleSubmit = (e) =>{
 e.preventDefault()
 const newMovie = {
    id:Math.random(),
    name:name,
    image : imageurl,
    date: date,
    rating:rating,
};
dispatch(addMovie(newMovie));
setDate("")
setImageurl("")
setName("")
setRating(0);

};
  return (
    <div>
      <Button variant="primary" onClick={handleShow}  >
        Ajouter un Film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{ display: "flex", flexDirection: "column", }} onSubmit={handleSubmit}>
            <label htmlFor="">Nom:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Image URL:</label>
            <input
              type="text"
              value={imageurl}
              onChange={(e) => setImageurl(e.target.value)}
            />
            <label htmlFor="">Date:</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="">Score:</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <Button variant="primary" onClick={handleClose} type="submit">
              Confirmer
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
