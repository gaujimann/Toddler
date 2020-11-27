import React from 'react';

const ProjectsContext = React.createContext({
  projects: {
    boards: [],
    lists: [],
    tasks: [],
    nextBoardId: 1,
    nextListId: 1,
    nextTaskId: 1,
  },
  updateProjects: () => {},
});

export default ProjectsContext;
