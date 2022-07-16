import { useState, ChangeEvent } from 'react';

export const useControlled = (initialValue: { [key: string]: any }) => {
  const [value, setValue] = useState(initialValue);

  /**
   * Allow to change the local state of the component ; part of the controlled component
   * @param {ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  /**
   * Reset value to the intialValue
   */
  const resetValue = () => {
    setValue(initialValue);
  };
  // need "ad const" for typescript
  return [value, resetValue, handleChange] as const;
};
