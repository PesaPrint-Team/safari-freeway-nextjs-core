import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const args = process.argv.slice(2);
const nextBin = resolve(process.cwd(), 'node_modules/next/dist/bin/next');

// Bun forwards SIGUSR1 while running Next.js scripts on this setup.
// Ignore it here and let the spawned Node process manage its own lifecycle.
process.on('SIGUSR1', () => {});

const child = spawn(process.execPath, [nextBin, ...args], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NEXT_TEST_WASM: process.env.NEXT_TEST_WASM ?? '1'
  }
});

for (const signal of ['SIGINT', 'SIGTERM', 'SIGHUP']) {
  process.on(signal, () => {
    child.kill(signal);
  });
}

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
