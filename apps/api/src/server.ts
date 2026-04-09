// ============================================================
// @breeyard/api — Fastify server factory
// ============================================================

import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { env } from './env.js';
import { authRoutes } from './routes/auth.js';
import { healthRoutes } from './routes/health.js';

export const buildServer = async () => {
  const server = Fastify({ logger: true });

  await server.register(helmet);
  await server.register(cors, {
    origin: env.CORS_ORIGINS,
    credentials: true,
  });

  await server.register(healthRoutes, { prefix: '/health' });
  await server.register(authRoutes, { prefix: '/auth' });

  return server;
};
