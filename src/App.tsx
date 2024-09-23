import React, { useState } from 'react';
import SidebarUser from './SidebarUser';
import Sidebar from './sidebar';        

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      {isLoggedIn ? <SidebarUser /> : <Sidebar />}

      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Fazer logout' : 'Fazer login'}
        </button>
      </div>
    </div>
  );
};

export default App;
