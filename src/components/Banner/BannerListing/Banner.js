import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Banner = ({ item }) => {
  const [published, setPublished] = useState(item.status === "published");
  const [pos, setPos] = useState(item.position);

  return (
    <tr>
      <td>
        <img src={item.img} alt="Loading.." />
      </td>
      <td>{item.text}</td>
      <td>
        <input
          type="number"
          value={pos}
          onChange={(e) => setPos(e.target.value)}
        />
        <button>Update</button>
      </td>
      <td>
        {published ? (
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => setPublished(!published)}
          >
            Unpublish
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => setPublished(!published)}
          >
            Publish
          </button>
        )}
      </td>
      <td>{item.created_on}</td>
      <td>
        <Link to="edit_banner">
          <BiEdit />
        </Link>
      </td>
    </tr>
  );
};

export default Banner;
