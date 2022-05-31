import React, { useState } from 'react';
import axios from "axios";

const Article = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [categoryid, setCategoryid] = useState("");

    const handleSubmit = async event => {
      event.preventDefault();

      try {
        const response = await axios.post("http://localhost:3000/articles", {
          title: title,
          description: description,
          content: content,
          categoryId: categoryid
        }, {headers: {'Content-Type': 'application/json'}, withCredentials: 'include'});
        console.log(response);
      } catch(error) {
        console.log(error);
      }
    }

  return (
    <div className="text-center">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please enter your article</h1>
        <input
          type="text"
          id="inputTitle"
          className="form-control"
          placeholder="Title"
          required
          autoFocus
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="inputDescription"
          className="form-control"
          placeholder="Description"
          required
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="text"
          id="inputContent"
          className="form-control"
          placeholder="Content"
          required
          onChange={e => setContent(e.target.value)}
        />
        <input
          type="text"
          id="inputCategoryId"
          className="form-control"
          placeholder="CategoryId"
          required
          onChange={e => setCategoryid(e.target.value)}
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Submit article
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
    </div>
  )
}

export default Article