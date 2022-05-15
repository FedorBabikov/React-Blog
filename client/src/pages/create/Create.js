import React from "react";
import "./create.css";

export default function Create() {
  return (
    <div className="create">
      <h3>Create new post</h3>
      <form>
        <section>
          <label htmlFor="file">
            <i className="fa-solid fa-file-circle-plus"></i>
          </label>
          <input type="file" id="file" />
          <input
            type="text"
            id="title"
            placeholder="post title"
            autoFocus={true}
          />
        </section>
        <section>
          <textarea placeholder="contents: drag me by corner"></textarea>
        </section>
        <section>
          <button>ADD POST</button>
        </section>
      </form>
    </div>
  );
}
