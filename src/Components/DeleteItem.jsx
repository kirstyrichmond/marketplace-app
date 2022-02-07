import { deleteItemById } from "../Utils/api";
import React from 'react';
import { useState } from "react/cjs/react.development";

const DeleteItem = ({ item_id }) => {
    const [disableDeleteBtn, setDisableDeleteBtn] = useState(false)

    const handleDelete = () => {

        deleteItemById(item_id)
            .then(() => {
                window.location.reload(false)
                setDisableDeleteBtn(true)
            })
    }

  return (
      <button disabled={disableDeleteBtn} className="delete-button" onClick={handleDelete}>
          Delete Item
      </button>
  )
}

export default DeleteItem;
