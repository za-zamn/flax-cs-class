import { io } from 'socket.io-client';
import {
  beforeEach, afterEach, expect, test,
} from '@jest/globals';
import request from 'supertest';
import server, { app } from './app';

const port = 9999;

beforeEach(() => {
  server.closeAllConnections();
  server.listen(port);
});
afterEach(() => {
  server.closeAllConnections();
  server.close();
});

test('Chat works', (done) => {
  const socket1 = io(`http://localhost:${port}`);
  const socket2 = io(`http://localhost:${port}`, { forceNew: true });

  socket1.on('connect', () => {
    socket2.on('connect', () => {
      socket1.emit('chat', { screenName: 'Screen Name', message: 'Message' });
    });
  });

  let doneWrapper = () => done;
  socket1.on('chat', ({ screenName, message }) => {
    expect(screenName).toBe('Screen Name');
    expect(message).toBe('Message');
    socket1.close();
    doneWrapper = doneWrapper();
  });
  socket2.on('chat', ({ screenName, message }) => {
    expect(screenName).toBe('Screen Name');
    expect(message).toBe('Message');
    socket2.close();
    doneWrapper = doneWrapper();
  });
});

test('Join works', (done) => {
  const socket1 = io(`http://localhost:${port}`, { path: '/socket-server' });
  const socket2 = io(`http://localhost:${port}`, { path: '/socket-server', forceNew: true });

  socket1.on('connect', () => {
    socket2.on('connect', () => {
      socket1.emit('join', 'Screen name');
    });
  });

  socket1.on('join', () => {
    throw new Error("Socket 1 shouldn't get this notice");
  });
  socket2.on('join', (screenName) => {
    expect(screenName).toBe('Screen name');
    socket1.close();
    socket2.close();
    done();
  });
});

test('Leave works', (done) => {
  const socket1 = io(`http://localhost:${port}`, { path: '/socket-server' });
  const socket2 = io(`http://localhost:${port}`, { path: '/socket-server', forceNew: true });

  socket1.on('connect', () => {
    socket2.on('connect', () => {
      socket1.emit('join', 'Screen name');
      socket1.close();
    });
  });

  socket2.on('leave', (screenName) => {
    expect(screenName).toBe('Screen name');
    socket2.close();
    done();
  });
});

test('Web server works', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect((response) => {
      expect(response.text).toContain('<!doctype html>');
    })
    .end(done);
});
