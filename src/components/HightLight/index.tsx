import React, { FC } from "react";
import "./styleLight.scss";

interface Interface {
  inputFilter: string;
  str: string;
}
const HightLight: FC<Interface> = ({ inputFilter, str }) => {
  if (!inputFilter) return <span>{str}</span>;
  const regexp = new RegExp(inputFilter, "ig");
  const matchValue = str.match(regexp);

  if (matchValue) {
    return (
      <>
        {str.split(regexp).map((line, index, array) => {
          if (index < array.length - 1) {
            const result = matchValue.shift();
            return (
              <>
                {line}
                <span className={"yellowLight"}>{result}</span>
              </>
            );
          }
          return <span>{line}</span>;
        })}
      </>
    );
  }
  return <span>{str}</span>;
};

export default HightLight;
