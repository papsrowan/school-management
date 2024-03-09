import React from "react";
import mockMatiere from "../../Utils/CheckMatiereMock";

const CheckMatiere = ({
  value,
  handleChecked,
}: {
  value: string | number;
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <input
        type="checkbox"
        name={`value`}
        value={value}
        onChange={handleChecked}
      />
      <label>{mockMatiere.find((el) => el.id === value)?.value}</label>
    </div>
  );
};

export default CheckMatiere;
