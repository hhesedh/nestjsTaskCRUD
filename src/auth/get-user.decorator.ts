import { createParamDecorator } from '@nestjs/common';
import { User } from './auth.entity';

export const GetUser = createParamDecorator((data, req): User => req.user);
