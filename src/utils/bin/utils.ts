import packageJson from '../../../package.json'
import * as bin from './index'

export async function help(args: string[]): Promise<string> {
  const commands = Object.keys(bin).sort().join(', ')

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`
}

export async function echo(args: string[]): Promise<string> {
  return args.join(' ')
}

export async function whoami(args: string[]): Promise<string> {
  return 'guest'
}

export async function date(args: string[]): Promise<string> {
  return new Date().toString()
}

export async function gui(args: string[]): Promise<string> {
  window.open('https://m4tt72.com', '_self')

  return 'Opening GUI version...'
}

export async function email(args: string[]): Promise<string> {
  window.open('mailto:hi@nm4tt72.com')

  return 'Opening mailto:hi@m4tt72.com...'
}

export async function vi(args: string[]): Promise<string> {
  return 'why use vi? try \'emacs\'.'
}

export async function vim(args: string[]): Promise<string> {
  return 'why use vim? try \'emacs\'.'
}

export async function emacs(args?: string[]): Promise<string> {
  return 'really? emacs? you should be using \'vim\''
}

export async function sudo(args?: string[]): Promise<string> {
  setTimeout(() => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }, 1000)

  return `Permission denied: unable to run the command '${args[0]}' as root.`
}

export async function repo(args?: string[]): Promise<string> {
  setTimeout(() => {
    window.open('https://github.com/m4tt72/terminal', '_blank')
  }, 1000)

  return 'Opening repository...'
}

export async function donate(args?: string[]): Promise<string> {
  window.open(packageJson.funding.url, '_blank')

  return 'Opening donation url...'
}

export function banner(args?: string[]): string {
  return `
███╗   ███╗██╗  ██╗████████╗████████╗███████╗██████╗
████╗ ████║██║  ██║╚══██╔══╝╚══██╔══╝╚════██║╚════██╗
██╔████╔██║███████║   ██║      ██║       ██╔╝ █████╔╝
██║╚██╔╝██║╚════██║   ██║      ██║      ██╔╝ ██╔═══╝
██║ ╚═╝ ██║     ██║   ██║      ██║      ██║  ███████╗
╚═╝     ╚═╝     ╚═╝   ╚═╝      ╚═╝      ╚═╝  ╚══════╝ v${packageJson.version}

Type 'help' to see list of available commands.

--
The project is open-source 🎉 type 'repo' to check out the repository.

New 🎉: Try out the new 'theme' command. See all available themes <a href="https://github.com/m4tt72/terminal/tree/master/docs/themes">in the docs</a>.
New 🎉: New command 'neofetch', for you linux.
--
`
}
