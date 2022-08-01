import { useState, useEffect } from "react";
function DataLoad() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function Datafetch() {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");

      const res = await data.json();

      setPost(res);
    }

    Datafetch();
  }, []);
  const listStyle = {
    listStyle: "none",
    /* display: flex; */
    /* flex-direction: column; */
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridGap: " 20px",
    padding: "0",
    justifyContent: "center",
  };

  return (
    <div>
      <h2
        style={{ marginBottom: "30px", textAlign: "center", marginTop: "30px" }}
      >
      
        our all blog
      </h2>
      <ul style={listStyle}>
        {post.map((item) => {
          return (
            <li
              style={{
                width: "250px",
                border: "4px solid green",
                textAlign: "center",
              }}
              key={item.id}
            >
              <h4>{item.title}</h4>
              <p>{item.body}</p> <span>{item.id}</span>           </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DataLoad;
