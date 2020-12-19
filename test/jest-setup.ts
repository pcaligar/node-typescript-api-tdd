// import { Global } from '@emotion/core';
import {SetupServer} from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
    const server = new SetupServer();
    server.init();
    global.testRequest = supertest(server.getApp());
});