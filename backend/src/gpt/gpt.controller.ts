import { Body, Controller, Post, Logger } from '@nestjs/common';
import { GptService } from './gpt.service';

@Controller('gpt')
export class GptController {
  private readonly logger = new Logger(GptController.name);

  constructor(private readonly gptService: GptService) {}

  @Post('generate')
  async generate(@Body() body: { prompt: string }) {
    this.logger.log('Received prompt:', body.prompt); // ✅ Log input
    try {
      const result = await this.gptService.generateResponse(body.prompt);
      this.logger.log('Generated response:', result); // ✅ Log output
      return result;
    } catch (error) {
      this.logger.error('Error generating response:', error.message);
      throw error;
    }
  }
}
