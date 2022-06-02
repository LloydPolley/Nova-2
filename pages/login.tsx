import classNames from "classnames/bind";
import PageWrapper from "../components/PageWrapper";
import { useAuth0 } from "@auth0/auth0-react";

// const cx = classNames.bind(style);

function profile() {
  const { isAuthenticated, loginWithRedirect, isLoading, error } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <PageWrapper>
      <h1>Login</h1>
    </PageWrapper>
  );
}

export default profile;
