import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window";

function Navbar() {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Mohamed Alkafory -Portfolio</p>
        <ul className="ml-7 space-x-5">
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <p onClick={() => openWindow(type)} className="font-medium">
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("MMM DD, h:mm A")}</time>
      </div>
    </nav>
  );
}

export default Navbar;
