const { spawn } = require('node:child_process')

const out = require('node:fs').createWriteStream('.codex-vite-dev.log', {
  flags: 'a',
})

const child = spawn(process.execPath, [
  'node_modules/vite/bin/vite.js',
  '--host',
  '127.0.0.1',
  '--config',
  '.codex.vite.config.js',
  '--configLoader',
  'runner',
], {
  cwd: __dirname,
  detached: false,
  stdio: ['pipe', 'pipe', 'pipe'],
  windowsHide: true,
})

child.stdout.pipe(out)
child.stderr.pipe(out)

child.on('exit', (code) => {
  out.write(`\n[codex launcher] vite exited with code ${code}\n`)
  process.exit(code ?? 0)
})

process.on('SIGTERM', () => child.kill('SIGTERM'))
process.on('SIGINT', () => child.kill('SIGINT'))

setInterval(() => {}, 60_000)
