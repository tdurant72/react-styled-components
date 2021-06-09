const [users, setUsers] = useState([]);

//.then assignment
useEffect(() => {
  const getUsers = async () => {
    try {
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
      console.log("users", users);
    } catch (error) {
      console.log("error", error);
    }
  };
  getUsers();
}, []);

//await assignment to consts
useEffect(() => {
  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
      console.log("users", users);
    } catch (error) {
      console.log("error", error);
    }
  };
  getUsers();
}, []);

//double await
useEffect(() => {
  const getUsers = async () => {
    try {
      const data = await (await fetch("https://api.github.com/users")).json();
      setUsers(data);
      console.log("users", users);
    } catch (error) {
      console.log("error", error);
    }
  };
  getUsers();
}, []);
