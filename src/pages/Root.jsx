import { Outlet } from 'react-router-dom';
import './Root.css';

function Root() {
  return (
    <div>
      <h1>Root</h1>
      <Outlet />
    </div>
  );
}

export default Root;
