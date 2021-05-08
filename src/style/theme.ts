import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  })

const theme = extendTheme({
    breakpoints,
    styles: {
        global: {
            body: {
                height: '100%',
                backgroundColor: {base: 'none', md: 'orange.100'},
                color: 'gray.800',
            }
        }
    }
})

export default theme