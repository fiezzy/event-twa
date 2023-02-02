import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/style/GlobalStyle'
import { theme } from 'assets/style/theme'
import { ActiveBlockProvider } from 'context'
import App from './App'
import i18n from './i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <ActiveBlockProvider>
          <App />
        </ActiveBlockProvider>
        <GlobalStyle />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
)
