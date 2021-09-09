import { useState } from "react";

function useUser(arrList) {
  const [listUser, setListUser] = useState(arrList);
  const [input, setInput] = useState("");

  const inputNameDelete = (e) => {
    setInput(e.target.value);
  };

  const deleteUser = () => {
    let newListUser = [].concat(listUser);
    if (newListUser.findIndex((value) => value === input) !== -1) {
      newListUser.splice(
        newListUser.findIndex((value) => value === input),
        1
      );
    }
    setListUser(newListUser);
  };

  return { listUser, input, deleteUser, inputNameDelete };
}
export default useUser;
