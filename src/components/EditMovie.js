import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

const EditMovie = ({el}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //edited movie States:
  const [name, setName] = useState(el.name);
  const [imageurl, setImageurl] = useState(el.image);
  const [rating, setRating] = useState(el.rating);
  const [date, setDate] = useState(el.date);

  //new movie function:
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
   e.preventDefault();
   const editedMovie = {
     id:el.id,
     name:name,
     image:imageurl,
     date:date,
     rating:rating,

     };
     dispatch(editedMovie(editedMovie));

   };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Modifier
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form style={{ display: "flex", flexDirection: "column", }} 
        onSubmit={handleSubmit}
        >
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
              Confirme
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

export default EditMovie;
