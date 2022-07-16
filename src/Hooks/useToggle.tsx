import { useState } from 'react';

export const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(!value);

  // need "ad const" for typescript
  return [value, toggleValue] as const;
};
