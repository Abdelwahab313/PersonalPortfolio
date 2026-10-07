import React from "react";
import {Link} from "../../router/Router";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>Not found</h1>
      <p>That page does not exist.</p>
      <Link to="/">Back to the home page</Link>
    </section>
  );
}
