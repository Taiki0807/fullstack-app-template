import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../../utils/fastify';

export default async function helloControler(fastify: FastifyInstance) {
    fastify.get('/', async (request, reply) => {
        reply.type('application/json').code(200);
        return { hello: 'world' };
    });
    fastify.post('/create-task', async (request, reply) => {
        const validation = z.object({
            title: z.string(),
            content: z.string()
        });
        const { title, content } = await validation.parse(request.body);
        const task = await prisma.task.create({
            data: {
                title: title,
                content: content
            }
        });
        reply.code(200).send({ task });
    });
    fastify.get('/get-task', async (request, reply) => {
        const task = await prisma.task.findMany();
        reply.code(200).send({ task });
    });
}
