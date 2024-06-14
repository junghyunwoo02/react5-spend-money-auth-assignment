import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <GlobalStyle />
      <Router user={user} setUser={setUser} />
    </div>
  );
};

export default App;
