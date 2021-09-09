import useUser from "./useUser.js";
import { useState } from "react";

function App() {
  let listName = ["Huyen", "Hoa", "Hung", "Long"];
  const { listUser, input, deleteUser, setInput } = useUser(listName);

  const showList = listUser.map((item, index) => {
    if (index === listUser.length - 1) {
      return <span>{item} </span>;
    } else {
      return <span>{item}, </span>;
    }
  });

  return (
    <div className="App">
      <p>学生一覧：["Huyen", "Hoa", "Hung", "Long"]</p>
      <p>削除値を入力してください。</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={(e) => {
          deleteUser();
        }}
      >
        確定
      </button>
      <p>削除する名前： {input}</p>
      <p>新しい一覧：[ {showList} ]</p>
    </div>
  );
}

export default App;
