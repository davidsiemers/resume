export const welcome = async (): Promise<string> => {
  return `
<pre style="line-height: 1; white-space: pre; font-family: monospace; font-size: 10pt;">
 _    _ _____ _     _____ ________  ___ _____ _
| |  | |  ___| |   /  __ \\  _  |  \\/  ||  ___| |
| |  | | |__ | |   | /  \\/ | | | .  . || |__ | |
| |/\\| |  __|| |   | |   | | | | |\\/| ||  __|| |
\\  /\\  / |___| |___| \\__/\\ \\_/ / |  | || |___|_|
 \\/  \\/\\____/\\_____/\\____/\\___/\\_|  |_/\\____/(_)
</pre>
<p>
  Try the 'help' command to see a list of available commands.
</p>
`
}
