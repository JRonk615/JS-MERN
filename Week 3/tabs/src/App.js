import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Results from './components/Results';

function App() {
  const tabsArray = [
    { label: "Tab 1", content: "This goes here but im not fully sure how." },
    { label: "Tab 2", content: "Just doing this to pass time currently" },
    { label: "Tab 3", content: "Does it still work?" },
    { label: "Tab 4", content: "I think ill get some help from a teacher" },
  ];
  const [ allTabs, setAllTabs ] = useState(tabsArray);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div className="App">
      <Tabs
          allTabs={ allTabs } 
          currentTabIndex={ currentTabIndex }
          setCurrentTabIndex={ setCurrentTabIndex }
      />
      <Results allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
    </div>
  );
}

export default App;
