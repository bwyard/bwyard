// ============================================================
// @breeyard/api — Fastify entry point
// ============================================================

import { buildServer } from './server.js';

const start = async () => {
  const server = await buildServer();
  const host = process.env['HOST'] ?? '0.0.0.0';
  const port = parseInt(process.env['PORT'] ?? '3001', 10);

  await server.listen({ host, port });
};

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
