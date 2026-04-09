// ============================================================
// Health check route
// ============================================================

import type { FastifyInstance } from 'fastify';

export const healthRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/', async () => ({
    status: 'ok',
    timestamp: new Date().toISOString(),
  }));
};
