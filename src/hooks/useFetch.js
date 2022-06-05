import { useEffect, useState } from "react";
import axios from "axios";
function useFetch(url, initalVal) {
  const [result, setResult] = useState(initalVal);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(url);
      setResult(response.data.students);
    };
    fetchData().catch((err) => console.error(err));
  }, [url]);
  return result;
}

export default useFetch;
