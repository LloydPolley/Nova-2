import classNames from "classnames/bind";
import style from "./Navigation.module.scss";
import Link from "next/link";
import { FaSearch, FaDiceD6 } from "react-icons/fa";

type Props = {
  title?: string;
};

const cx = classNames.bind(style);

const Navigation = ({ title }: Props) => {
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
          <Link href="/djs">
            <a>Login/Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
