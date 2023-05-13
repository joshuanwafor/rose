import Notiflix from "notiflix";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

export default function Loading() {
  useEffect(() => {
    Notiflix.Loading.pulse();
    return () => {
      Notiflix.Loading.remove();
    };
  }, []);
  return <div className="container my-4"></div>;
}
