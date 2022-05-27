import classNames from "classnames/bind";
import style from "./Navigation.module.scss";
import Link from "next/link";

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
            <a>Home</a>
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
          <Link href="/competitive">
            <a>Competitive</a>
          </Link>
        </div>
        <div className={cx("nav__profile")}>
          <Link href="/">
            <a>Home</a>
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
          <Link href="/competitive">
            <a>Competitive</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
