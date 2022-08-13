import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://example.com/uses").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem id={user.id} name={user.nama} age={(user, age)} />
      ))}
    </div>
  );
};
