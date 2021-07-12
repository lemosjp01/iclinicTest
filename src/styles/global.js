import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

	button, h2, h3, h4, h5, h6, strong, p, span, a, label {
		font-family: 'Montserrat', sans-serif;
	}

  h1 {
		font-family: 'Lato', sans-serif;
  }

  button {
		cursor: pointer;
  }
`
