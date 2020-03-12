import { Sidebar } from 'components/Sidebar'
import React from 'react'

const ControlPanel = () => {
  return (
    <div className='page control-panel'>
      <Sidebar>
        <Sidebar.Button>Dashboard</Sidebar.Button>
        <Sidebar.Button>Events</Sidebar.Button>
        <Sidebar.Button>Users</Sidebar.Button>
        <Sidebar.Button>Sponsors</Sidebar.Button>
        <Sidebar.Button>Finance</Sidebar.Button>
        <Sidebar.Button>Settings</Sidebar.Button>
        <Sidebar.Footer
          text={`
            COPYRIGHTS © IONIO IEEE SB
            2020-2021
            v1.0
          `}
        />
      </Sidebar>
    </div>
  )
}

export default ControlPanel
