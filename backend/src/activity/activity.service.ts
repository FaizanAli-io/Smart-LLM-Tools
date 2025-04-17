import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './activity.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async logActivity(userId: number, prompt: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }
    const activity = this.activityRepository.create({
      user,
      prompt,
      loggedAt: new Date(),
    });
    return this.activityRepository.save(activity);
  }

  async getAllActivities() {
    return this.activityRepository.find({ relations: ['user'] });
  }
}
