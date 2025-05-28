import env from '@manonymous-chat/config-env';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: env.APP_ORIGINS as string | string[] | RegExp,
  },
})
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ): string {
    console.log(`Received message: ${message}`);
    client.emit('message', 'Message received');
    return 'Hello, world!';
  }

  @SubscribeMessage('join')
  handleJoinRoom(
    @MessageBody() room: string,
    @ConnectedSocket() client: Socket,
  ): void {
    client.join(room);
    client.emit('message', `Joined room: ${room}`);
  }
}
