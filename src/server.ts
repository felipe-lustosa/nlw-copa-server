import Fastify from "fastify";
import cors from "@fastify/cors";
import { poolRoutes } from "./routes/pool";
import { gameRoutes } from "./routes/game";

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    });

    await fastify.register(cors, {
        origin: true,
    });

    fastify.register(poolRoutes);
    fastify.register(gameRoutes);
    fastify.register(gameRoutes);

    await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
