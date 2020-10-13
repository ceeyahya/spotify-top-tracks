import React from 'react';

export default function SectionContainer({ children }) {
  return (
    <div className="max-w-2xl px-4 py-4 mx-auto overflow-auto sm:px-6 xl:max-w-6xl">
      {children}
    </div>
  );
}
