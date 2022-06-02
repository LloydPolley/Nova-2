import classNames from "classnames/bind";
import Image from "next/image";

import PageWrapper from "../components/PageWrapper";
import { useAuth0 } from "@auth0/auth0-react";

// const cx = classNames.bind(style);

// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };

function profile() {
  const { isLoading, error, user } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <PageWrapper>
      <h1>{user && user.name}</h1>
      <p>{user && JSON.stringify(user)}</p>
      <Image alt="Mountains" src={user?.picture} objectFit="cover" />
    </PageWrapper>
  );
}

export default profile;
