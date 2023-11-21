import React from "react";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="note">
      <div>{note.content}</div>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;

//SEVASTIAN
// export const Note = ({ title, body, content }) => {
//   return (
//     <li>
//       {/* <p>{title}</p>
//       <small>{body}</small> */}
//       <small>{content}</small>
//     </li>
//   );
// };
/*
return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
      {categories.map((category) => {
        <small key={category}>{category}</small>;
      })}
      <br />
      <small>{important ? "Importante" : "No importante"}</small>
    </li>
  );
*/
