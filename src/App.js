import { Provider } from "react-redux";
import Routes from "./routes";
import { PersistGate } from 'redux-persist/integration/react'

import config from './configureStore';

function App() {
  return (
    <Provider store={config().store}>
      <PersistGate loading={null} persistor={config().persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
