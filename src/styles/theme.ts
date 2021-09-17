import { extendTheme} from "@chakra-ui/react";

export const theme  = extendTheme({
styles: {
  colors: {
    white: "#FFFFFF",
    gray: {
      "50":  "#F5F8FA",
      "100": "#DADADA",
      "200": "#999999",
      "300": "#47585B",
    },
    black: "#000000",
    yellow: "#FFBA08",
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins"
  },
  global: {
    body: {
      bg: 'gray.50'
    
    }
  }
}  
})