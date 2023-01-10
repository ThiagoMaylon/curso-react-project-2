import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import {theme} from './theme'

export const renderTheme = (Children) => {
    return render(<ThemeProvider theme={theme}>{Children}</ThemeProvider>)
  }