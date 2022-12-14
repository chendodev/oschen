import React from 'react';
import GridUser from '@components/taskbar/GridUser/GridUser';
import GridPrograms from '@components/taskbar/GridPrograms/GridPrograms';
import GridApplications from '@components/taskbar/GridApplications/GridApplications';
import useMediaQuery from '@hooks/useMediaQuery';

const StartMenu = () => {

  const matches = useMediaQuery("(max-width: 768px)");

  return(
    <React.Fragment> 
      <div id="StartMenu" className='setMenu'>
      <div className="grid">
        <GridUser />
        <GridPrograms />
        {!matches ? <GridApplications /> : null }
      </div>
      </div>
    </React.Fragment>
  );
}

export {StartMenu};