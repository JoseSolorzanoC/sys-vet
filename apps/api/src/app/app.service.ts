import { Injectable } from '@nestjs/common';
import { Message } from '@sys-vet/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
