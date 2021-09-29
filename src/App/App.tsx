import Home from "../Pages/Home";
import { AppProvider } from "../Context";

const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};
export default App;
