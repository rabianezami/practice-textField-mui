import { CssBaseline } from "@mui/material"
import BasicTextFields from "./components/BasicTextFields"
import ValidationTextFields from "./components/ValidationTextFields"
import Multiline from "./components/Multiline"
import InputWithIcon from "./components/InputWithIcon"

function App() {

  return (
    <>
    <CssBaseline />
    <BasicTextFields />
    <ValidationTextFields />
    <Multiline />
    <InputWithIcon />
    </>
  )
}

export default App
