import React from 'react';
import FileExplorer from './pages/FileExplorer';
import Initializer from './initializer';

function App() {
  return (
    <Initializer>
      <FileExplorer />
    </Initializer>
  );
}

export default App;
