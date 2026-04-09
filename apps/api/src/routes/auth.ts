// ============================================================
// Auth routes — delegate all auth handling to better-auth
// ============================================================

import type { FastifyInstance } from 'fastify';
import { getAuth } from '@breeyard/auth';
import { toNodeHandler } from 'better-auth/node';

export const authRoutes = async (fastify: FastifyInstance) => {
  const auth = getAuth();
  const handler = toNodeHandler(auth);

  // better-auth handles all /auth/* routes internally
  fastify.all('/*', async (request, reply) => {
    // Adapt Fastify req/reply to Node.js IncomingMessage/ServerResponse
    await handler(request.raw, reply.raw);
  });
};
