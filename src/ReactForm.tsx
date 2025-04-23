import { useState, useMemo, memo, useCallback } from "react";

const ReactFirstNameInput = memo(
  ({ firstName, setFirstName }: { firstName: string; setFirstName: (value: string) => void }) => {
    console.log("ReactFirstNameInput rerender");
    return (
      <div className="form-group">
        <label htmlFor="reactFirstName">First Name:</label>
        <input type="text" id="reactFirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
    );
  },
);

const ReactLastNameInput = memo(
  ({ lastName, setLastName }: { lastName: string; setLastName: (value: string) => void }) => {
    console.log("ReactLastNameInput rerender");
    return (
      <div className="form-group">
        <label htmlFor="reactLastName">Last Name:</label>
        <input type="text" id="reactLastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
    );
  },
);

const ReactFullNameResult = memo(({ firstName, lastName }: { firstName: string; lastName: string }) => {
  console.log("ReactFullNameResult rerender");

  const fullName = useMemo(() => `${firstName} ${lastName}`, [firstName, lastName]);

  return (
    <div className="result">
      <h2>Full Name:</h2>
      <p>{fullName}</p>
    </div>
  );
});

// React useState Form
const ReactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log("ReactForm rerender");

  // Мемоизируем callback-функции
  const handleSetFirstName = useCallback((value: string) => {
    setFirstName(value);
  }, []);

  const handleSetLastName = useCallback((value: string) => {
    setLastName(value);
  }, []);

  return (
    <div className="form-container">
      <h2>React useState Form</h2>
      <ReactFirstNameInput firstName={firstName} setFirstName={handleSetFirstName} />
      <ReactLastNameInput lastName={lastName} setLastName={handleSetLastName} />
      <ReactFullNameResult firstName={firstName} lastName={lastName} />
    </div>
  );
};

ReactFirstNameInput.displayName = "ReactFirstNameInput";
ReactLastNameInput.displayName = "ReactLastNameInput";
ReactFullNameResult.displayName = "ReactFullNameResult";

export default ReactForm;
