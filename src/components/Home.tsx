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
      {/* Best Practice: Use data-* attributes to provide context to your selectors 
      and isolate them from CSS or JS changes. */}
      <input data-testId="test-input" />
    </div>
  );
};

export default Home;
