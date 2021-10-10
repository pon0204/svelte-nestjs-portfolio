import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async seed() {
    const user = this.userRepo.create({ email: 'example@user.com' });
    await this.userRepo.save(user);
  }
  getHello() {
    return this.userRepo.find();
  }
}
