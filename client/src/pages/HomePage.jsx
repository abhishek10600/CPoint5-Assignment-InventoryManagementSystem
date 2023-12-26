import { useParams } from "react-router-dom";
import Features from "../components/Features";

const HomePage = () => {
  let { action } = useParams();
  if (action === undefined) {
    action = "allitems";
  }
  return (
    <div>
      <div>
        <Features action={action} />
      </div>
    </div>
  );
};

export default HomePage;
