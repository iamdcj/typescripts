import React from 'react';

interface ActionProps {
  action(): void;
  label: string;
}

export const Action = ({ action, label }: ActionProps): JSX.Element => {
  return <button onClick={action}>{label}</button>
}
