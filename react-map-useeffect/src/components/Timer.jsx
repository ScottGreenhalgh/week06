import { useState, useEffect } from "react";

export default function Timer() {
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    console.log("useEffect running");
    const myInterval = setInterval(() => {
      console.log("This is running interval");
      setCookies((cookies) => cookies + 1);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div>
      <p>{cookies}</p>
    </div>
  );
}
