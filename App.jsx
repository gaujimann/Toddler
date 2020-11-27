import React from 'react';
import Boards from './src/views/Boards';
import AppContainer from './src/routes';
import ProjectsContext from './src/services/PrejectsContext';
import data from './src/resources/data.json';

export default function App() {
  const [projects, setProjects] = React.useState({
    boards: data.boards,
    lists: data.lists,
    tasks: data.tasks,
    nextBoardId: 4,
    nextListId: 9,
    nextTaskId: 17,
  })
  return (
    <ProjectsContext.Provider value={{
      projects,
      updateProjects: (update) => setProjects({ ...projects, ...update })
    }}
    >
      <AppContainer />
    </ProjectsContext.Provider>
  );
}
