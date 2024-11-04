import { useState } from "react";
import "./App.css";
import { Income, Expenses, Assets, Liabilities } from "./components";

function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      <header>
        <h1>Cashflow Game Calculator</h1>
      </header>
      <main>
        {/* steps to start playing */}
        {/* step 1: fill in your incomes */}
        {step === 0 && <Income onNextStep={() => setStep(step + 1)} />}
        {/* step 2: fill in your expenses */}
        {step === 1 && (
          <Expenses
            onNextStep={() => setStep(step + 1)}
            onBackStep={() => setStep(step - 1)}
          />
        )}
        {/* step 3: fill in your Assets */}
        {step === 2 && (
          <Assets
            onNextStep={() => setStep(step + 1)}
            onBackStep={() => setStep(step - 1)}
          />
        )}
        {/* step 4: fill in your Liabilities */}
        {step === 3 && (
          <Liabilities
            onNextStep={() => setStep(step + 1)}
            onBackStep={() => setStep(step - 1)}
          />
        )}
        {step >= 4 && (
          <>
            <h2> Monthly Cash Flow</h2>
            <p>Salary: </p>+<p>Passive Income: </p>=<p>Total Income: </p>
            <br></br>-<p>Total Expenses: </p>=<p>Monthly Cash Flow: </p>
          </>
        )}
      </main>
      <footer>Made by: @vlinay</footer>
    </>
  );
}

export default App;
