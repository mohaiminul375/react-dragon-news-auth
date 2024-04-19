import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
  const { id } = useParams();
//   console.log(id);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Details</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
