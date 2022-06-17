import { Injectable } from '@nestjs/common';
import { Message } from '@fullstack-monorepo/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to the new api!' };
  }
}
