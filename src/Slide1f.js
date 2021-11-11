import { useEffect, useState } from "react";

export default function Slide1f() {
  let numbred = 6;
  const [pic, setpic] = useState(`https://picsum.photos/seed/${numbred}/300`);

  useEffect(() => {
    let intervalID = setInterval(() => {
      numbred = numbred + 1;
      setpic(`https://picsum.photos/seed/${numbred}/900`);
    }, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div class="container">
      <img src={pic} />
    </div>
  );
}
