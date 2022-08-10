import AppSeguro from "./components/AppSeguro";
import { QuoterProvider } from "./context/QuoterProvider";

function App() {

  return (
    <QuoterProvider>
      <AppSeguro />
    </QuoterProvider>
  );
}

export default App;
