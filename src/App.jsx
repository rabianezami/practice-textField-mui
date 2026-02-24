import { CssBaseline } from "@mui/material"
import BasicTextFields from "./components/BasicTextFields"
import ValidationTextFields from "./components/ValidationTextFields"
import Multiline from "./components/Multiline"

function App() {

  return (
    <>
    <CssBaseline />
    <BasicTextFields />
    <ValidationTextFields />
    <Multiline />
    </>
  )
}

export default App
