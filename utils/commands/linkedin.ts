export const linkedin = async (): Promise<string> => {
  setTimeout(() => {
    window.open('https://www.linkedin.com/in/david-siemers/')
  }, 1000)

  return 'Opening LinkedIn...'
}
