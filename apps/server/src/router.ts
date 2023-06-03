import { FastifyInstance } from 'fastify';
import helloControler from './modules/task';

export default async function router(fastify: FastifyInstance) {
    fastify.register(helloControler, { prefix: '/api/v1' });
}
