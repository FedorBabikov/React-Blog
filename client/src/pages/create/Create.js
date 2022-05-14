import React from "react";
import "./create.css";

export default function Create() {
  return (
    <main className="create">
      <form>
        <section>
          <label htmlFor="file">
            <i className="fa-solid fa-file-circle-plus"></i>
          </label>
          <input type="file" id="file" />
          <input type="text" id="title" placeholder="title" autoFocus={true} />
        </section>
        <section>
          <textarea placeholder="contents: drag me to desired size"></textarea>
        </section>
        <section>
          <button>ADD POST</button>
        </section>
      </form>
    </main>
  );
}
