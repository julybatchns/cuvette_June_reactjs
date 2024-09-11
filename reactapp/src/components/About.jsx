import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  return <div>About : {id} </div>;
};

export default About;

//
