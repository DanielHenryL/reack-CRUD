import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Container } from "@mui/material"

export const UsersApp = () => {
  return (
    <>
        <Navbar />
        <Container sx={{p:3}}>
            <Outlet/>
        </Container>
    </>
  )
}
