import { Observable } from "@legendapp/state";
import { Memo, useObservable } from "@legendapp/state/react";
import { $React } from "@legendapp/state/react-web";

type PersonType = Observable<{
  firstName: string;
  lastName: string;
  fullName: () => string;
}>;

const FirstNameInput = ({ person$ }: { person$: PersonType }) => {
  console.log("FirstNameInput rerender");
  return (
    <div className="form-group">
      <label htmlFor="firstName">First Name:</label>
      <$React.input type="text" id="firstName" $value={person$.firstName} />
    </div>
  );
};

const LastNameInput = ({ person$ }: { person$: PersonType }) => {
  console.log("LastNameInput rerender");

  return (
    <div className="form-group">
      <label htmlFor="lastName">Last Name:</label>
      <$React.input type="text" id="lastName" $value={person$.lastName} />
    </div>
  );
};

const FullNameResult = ({ person$ }: { person$: PersonType }) => {
  console.log("FullNameResult rerender");

  return (
    <div className="result">
      <h2>Full Name:</h2>
      <Memo>{() => person$.fullName()}</Memo>
    </div>
  );
};

// LegendState Form
const LegendStateForm = () => {
  const person$ = useObservable({
    firstName: "",
    lastName: "",
    fullName: () => `${person$.firstName.get()} ${person$.lastName.get()}`,
  });

  console.log("LegendStateForm rerender");

  return (
    <div className="form-container">
      <h2>LegendState Form</h2>
      <FirstNameInput person$={person$} />
      <LastNameInput person$={person$} />
      <FullNameResult person$={person$} />
    </div>
  );
};

export default LegendStateForm;
