import { Controller, Get, Post, Body } from '@nestjs/common';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  async log(@Body() body: { userId: number; prompt: string }) {
    return this.activityService.logActivity(body.userId, body.prompt);
  }

  @Get()
  async getAll() {
    return await this.activityService.getAllActivities();
  }
}
