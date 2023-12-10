import { UserContextProvider } from "./UserContext";
import Header from "./Header";
import Content from "./Content";

function Exercise() {
  return (
    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  );
}

export default Exercise;
