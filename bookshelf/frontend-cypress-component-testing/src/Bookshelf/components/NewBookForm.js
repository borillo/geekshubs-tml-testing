import React, { useState } from "react";

const NewBookForm = ({ onNewBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <>
      <h1>Book info:</h1>

      <form>
        <div>
          <label htmlFor="form-title">Title:</label>
          <input
            id="form-title"
            type="text"
            name="title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="form-author">Author:</label>
          <input
            id="form-author"
            type="text"
            name="author"
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <button
          onClick={(event) => {
            event?.preventDefault();
            onNewBook({ title, author });
          }}
        >
          Add book
        </button>
      </form>
    </>
  );
};

export default NewBookForm;
