import { ReduxProvider } from "./providers/ReduxProvider";
import Routes from "./routes";

function App() {
  return (
    <ReduxProvider>
      <Routes />
    </ReduxProvider>
  );
}

export default App;
