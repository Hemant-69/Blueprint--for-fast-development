import { createContext, useContext, useState, useEffect } from 'react';

const CursorContext = createContext();

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }) => {
  const [cursorEnabled, setCursorEnabled] = useState(() => {
    const saved = localStorage.getItem('cursorEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('cursorEnabled', JSON.stringify(cursorEnabled));
    if (cursorEnabled) {
      document.body.classList.add('custom-cursor-active');
    } else {
      document.body.classList.remove('custom-cursor-active');
    }
  }, [cursorEnabled]);

  const toggleCursor = () => setCursorEnabled(prev => !prev);

  return (
    <CursorContext.Provider value={{ cursorEnabled, toggleCursor }}>
      {children}
    </CursorContext.Provider>
  );
};
