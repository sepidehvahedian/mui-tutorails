import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function Grids() {
  return (
     <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
         <Box
          display="flex"
          flexDirection="row"  // این باعث میشه آیتم‌ها کنار هم قرار بگیرن
          bgcolor="lightblue"
          p={2}
          height="100px"
        >
          <div style={{ marginRight: 10 }}>ردیف ۱</div>
          <div style={{ marginRight: 10 }}>ردیف ۲</div>
          <div>ردیف ۳</div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ background: 'lightgreen', height: '100px' }}>ستون ۲</div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div style={{ background: 'lightcoral', height: '100px' }}>ستون ۳</div>
      </Grid>
    </Grid>
  )
}

export default Grids
