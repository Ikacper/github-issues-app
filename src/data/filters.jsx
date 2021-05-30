import React from 'react';
import { IconGithub, IconOpenIssue, IconClosedIssue } from '../assets/svg/IconFilters';

const filters = [
  {
    id: 1,
    icon: <IconGithub />,
    name: 'All',
    amountOfIssues: 12,
  },
  {
    id: 2,
    icon: <IconOpenIssue />,
    name: 'Open',
    amountOfIssues: 4,
  },
  {
    id: 3,
    icon: <IconClosedIssue />,
    name: 'Closed',
    amountOfIssues: 8,
  },
];

export default filters;
