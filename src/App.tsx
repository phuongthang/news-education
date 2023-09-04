import { Suspense } from "react";
import Routes from "./routers/routes";
function App() {
  return (
    <Suspense fallback={null}>
      <Routes />
    </Suspense>
  );
}

export default App;
