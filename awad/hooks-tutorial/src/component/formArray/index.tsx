import { produce } from "immer";
import React, { useState } from "react";
import generate from "shortid";

interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
}

const initState = [
  {
    id: "1",
    firstName: "one",
    lastName: "two"
  }
];

const FormArray = () => {
  const [people, setPeople] = useState<IPerson[]>(initState);

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => {
          setPeople(cState => [
            ...cState,
            { id: generate(), firstName: "", lastName: "" }
          ]);
        }}
      >
        add new person
      </button>
      {people.map((person, index) => {
        return (
          <div key={person.id}>
            <input
              onChange={e => {
                const firstName = e.target.value;
                setPeople(currentPeople =>
                  // currentPeople.map(cp =>
                  //   cp.id === person.id ? { ...cp, firstName } : cp
                  // )
                  produce(currentPeople, draft => {
                    draft[index].firstName = firstName;
                  })
                );
              }}
              value={person.firstName}
              placeholder="first name"
            />
            <input
              onChange={e => {
                const lastName = e.target.value;
                setPeople(currentPeople =>
                  // currentPeople.map(cp =>
                  //   cp.id === person.id ? { ...cp, firstName } : cp
                  // )
                  produce(currentPeople, draft => {
                    draft[index].lastName = lastName;
                  })
                );
              }}
              value={person.lastName}
              placeholder="last name"
            />
            <button
              onClick={() => {
                setPeople(currentPeople =>
                  currentPeople.filter(
                    currentPerson => currentPerson.id !== person.id
                  )
                );
              }}
            >
              x
            </button>
          </div>
        );
      })}
      <div>{JSON.stringify(people, null, 2)}</div>
    </div>
  );
};

export default FormArray;
