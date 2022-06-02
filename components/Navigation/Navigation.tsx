import classNames from "classnames/bind";
import style from "./Navigation.module.scss";
import Link from "next/link";
import { FaSearch, FaDiceD6 } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  title?: string;
};

const cx = classNames.bind(style);

const Navigation = ({ title }: Props) => {
  const { isAuthenticated, loginWithRedirect, loginWithPopup, logout } =
    useAuth0();
  return (
    <div className={cx("nav")}>
      <div className={cx("nav__content")}>
        <div className={cx("nav__music")}>
          <Link href="/">
            <FaDiceD6 className={cx("dice")} />
          </Link>
          <Link href="/djs">
            <a>DJs</a>
          </Link>
          <Link href="/tracks">
            <a>tracks</a>
          </Link>
          <Link href="/sets">
            <a>sets</a>
          </Link>
          {/* <Link href="/competitive">
            <a>Competitive</a>
          </Link> */}
        </div>
        <div className={cx("nav__profile")}>
          <FaSearch />
          {/* <a>Search</a> */}
          {isAuthenticated && (
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          )}
          {!isAuthenticated ? (
            <button onClick={loginWithRedirect}>Login</button>
          ) : (
            <button
              onClick={() => {
                logout({ returnTo: "http://localhost:3000/" });
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
