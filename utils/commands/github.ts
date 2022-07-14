export const github = async (): Promise<string> => {
  setTimeout(() => {
    window.open('https://github.com/davidsiemers/resume')
  }, 1000)

  return 'Opening Project GitHub...'
}
