import { useState } from 'react';

const useToggle = (initialValue: boolean = false) => {
  const [isModalOpened, setIsModalOpened] = useState(initialValue);

  const toggleIsModalOpened = () => {
    setIsModalOpened((prev) => !prev);
  };

  return { isModalOpened, toggleIsModalOpened };
};

export default useToggle;
