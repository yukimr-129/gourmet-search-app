import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: 'orange.100',
                color: 'gray.800',

            }
        }
    }
})

export default theme