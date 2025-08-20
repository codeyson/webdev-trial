import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="spinach">Spinach</Link></li>
          <li><Link to="popeye">Popeye</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
};

export default Profile;
