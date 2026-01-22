import { useEffect } from "react";
import axios from "axios";

function App() {
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/health`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return <h1>Frontend Connected</h1>;
}

export default App;
