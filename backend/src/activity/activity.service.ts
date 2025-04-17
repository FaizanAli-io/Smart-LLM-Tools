import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepo: Repository<Activity>,
  ) {}

  async logActivity(username: string, action: string, category: string): Promise<Activity> {
    const activity = this.activityRepo.create({ username, action, category });
    return await this.activityRepo.save(activity);
  }

  async getAllActivities(): Promise<Activity[]> {
    return this.activityRepo.find({
      order: { timestamp: 'DESC' },
    });
  }
}
