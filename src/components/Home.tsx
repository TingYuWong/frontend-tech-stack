import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const toAboutPage = () => {
    navigate("/about");
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={toAboutPage}>Click</button>
    </div>
  );
};

export default Home;
