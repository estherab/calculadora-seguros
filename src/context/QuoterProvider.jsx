import { createContext, useState } from "react";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const quoteInsurance = () => {
    let result = 2000;

    // YEAR
    let yearDif = new Date().getFullYear() - data.year;
    result -= (yearDif * 3 * result) / 100;

    // BRAND
    let increment;
    switch (data.brand) {
      case "1":
        increment = 1.3;
        break;
      case "2":
        increment = 1.15;
        break;
      case "3":
        increment = 1.05;
        break;
      default:
        break;
    }

    result *= increment;

    // PLAN
    data.plan === "1" ? (result *= 1.2) : (result *= 1.5);

    result = result.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    setLoading(true);

    setTimeout(() => {
      setResult(result);
      setLoading(false);
    }, 1000);
  };

  return (
    <QuoterContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        quoteInsurance,
        result,
        loading
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };
export default QuoterContext;
