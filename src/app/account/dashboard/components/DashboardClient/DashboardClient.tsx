"use client"
import React from "react"
import { Container, Paper, Typography, Avatar, Button, Grid, Box } from "@mui/material"

const DashboardClient: React.FC = () => {
  return (
    <Container sx={{ padding: "20px" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Avatar alt="Client" src="/static/images/avatar/1.jpg" sx={{ marginRight: "15px" }} />
        <Typography variant="h5">Client Dashboard</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: "20px", marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography variant="h6" sx={{ marginBottom: "10px", fontWeight: "bold" }}>Personal Info</Typography>
              <Typography>Email: client@example.com</Typography>
              <Typography>Phone: (123) 456-7890</Typography>
            </div>
            <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>Edit Profile</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: "20px", marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography variant="h6" sx={{ marginBottom: "10px", fontWeight: "bold" }}>Order History</Typography>
              <Typography>Last Order: Order #1234</Typography>
              <Typography>Recent Orders: 5</Typography>
            </div>
            <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>View Orders</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: "20px", marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography variant="h6" sx={{ marginBottom: "10px", fontWeight: "bold" }}>Account Settings</Typography>
              <Typography>Security: Strong</Typography>
              <Typography>Subscription: Active</Typography>
            </div>
            <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>Manage Settings</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default DashboardClient
