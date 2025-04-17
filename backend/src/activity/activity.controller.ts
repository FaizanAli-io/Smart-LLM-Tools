import { Controller, Get, Post, Body } from '@nestjs/common';
import { ActivityService } from './activity.service';

@Controller('api/activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  async log(@Body() body: { username: string, action: string, category: string }) {
    return this.activityService.logActivity(body.username, body.action, body.category);
  }

  @Get()
  async getAll() {
    return this.activityService.getAllActivities();
  }
}
