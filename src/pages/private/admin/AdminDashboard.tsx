import React from 'react'
import Box from '@mui/material/Box'

import AdminDashboardSidebar from './AdminDashboardSidebar'
import CardUI from '../../../components/CardUi'

const AdminDashboard = () => {
  return (
    <div>
      <Box
        style={{
          padding: '32px 64px',
          display: 'flex',
          flex: '1 2',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexBasis: '30%',
          }}
        >
          <AdminDashboardSidebar />
        </div>
        <div
          style={{
            padding: '32px 16px',
            display: 'flex',
            flexBasis: '70%',
            flexWrap: 'wrap',
          }}
        >
          <CardUI title="50" subtitle="Products" text="sample text" />
          <CardUI title="50" subtitle="Users" text="sample text" />
          <CardUI title="50" subtitle="Orders" text="sample text" />
        </div>
      </Box>
    </div>
  )
}

export default AdminDashboard
