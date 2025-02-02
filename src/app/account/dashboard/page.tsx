// components/AuthClient.tsx

"use client"

import { useAuth0 } from "@auth0/auth0-react"
import Btn from "@/Components/Btn/Btn"
import DashboardClient from "./components/DashboardClient/DashboardClient"

const Page = () => {
  const { isAuthenticated, isLoading, logout, user } = useAuth0()
  console.log('isAuthenticated: ', isAuthenticated);
  console.log('isLoading: ', isLoading);
  console.log('user: ', user);

  if (isLoading) return <div>Loading...</div>

  if (!isAuthenticated) return <div>Please log in</div>

  return (
    <div>
      {/* <DashboardClient /> */}
      <Btn onClick={() => logout()}>Logout</Btn>
    </div>
  )
}

export default Page
