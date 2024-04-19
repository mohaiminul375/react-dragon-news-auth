import { FaGoogle, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import QZone1 from "../../../assets/qZone1.png";
import QZone2 from "../../../assets/qZone2.png";
import QZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-3 p-4 mb-6">
        <h2 className="text-2xl ">Login With </h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login with
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          GitHub with
        </button>
      </div>
      {/* find us */}
      <div className=" p-4 mb-6">
        <h2 className="text-2xl mb-4">Find Us on </h2>
        <Link className="flex p-4 items-center text-lg border rounded-t-lg">
          <FaFacebook className="mr-3" /> Facebook
        </Link>
        <Link className="flex p-4 items-center text-lg border-x">
          <FaXTwitter className="mr-3" /> Twiter
        </Link>
        <Link className="flex p-4 items-center text-lg border rounded-b-lg">
          <FaInstagram className="mr-3" /> Instagram
        </Link>
      </div>
      {/* qzone */}
      <div className="space-y-3 p-4 mb-6">
        <h2 className="text-2xl ">Q Zone </h2>
        <img src={QZone1} alt="" />
        <img src={QZone2} alt="" />
        <img src={QZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
