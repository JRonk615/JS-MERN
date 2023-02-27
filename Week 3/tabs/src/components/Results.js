import React from 'react';

const Results = (props) => {
  const { allTabs, currentTabIndex } = props;

  return (
    <div>
        <div class="tab-pane fade show active fs-1">{allTabs[currentTabIndex].content}</div>
    </div>
    

  )
}

export default Results;