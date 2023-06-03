import fastify from 'fastify';
import router from './router';

export function createServer(config: ServerConfig) {
    const app = fastify({
        // Logger only for production
        logger: !!(process.env.NODE_ENV !== 'development')
    });
    app.register(router);
    const listen = () => {
        app.listen(
            {
                host: config.host,
                port: config.port
            },
            function (err) {
                if (err) {
                    app.log.error(err);
                }
            }
        );
        process.on('SIGINT', () => {
            app.log.info('Exited program');
            process.exit(0);
        });
    };

    return {
        ...app,
        listen
    };
}
