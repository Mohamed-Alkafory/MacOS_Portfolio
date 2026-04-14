import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants";

function Navbar() {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Mohamed Hamed - Portfolio</p>
      </div>
      <ul>
        {navLinks.map(({ id, name }) => (
          <li key={id}>
            <p>{name}</p>
          </li>
        ))}
      </ul>

      <time>{dayjs().format("MMM DD, h:mm A")}</time>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
