import Fastify from 'fastify';
import {route} from './route';
import cors from '@fastify/cors'

const app = Fastify({ logger: true})

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({message: error.message})
})

const start = async () => {

    await app.register(route);
    await app.register(cors);

    try{
        await app.listen({port: 3333})

    }catch(err){
        process.exit(1)
    }
}


start();