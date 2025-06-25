import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private readonly logger = new Logger(GptService.name);
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // must be set in .env
  });

  async generateResponse(prompt: string): Promise<any> {
    this.logger.log(`Calling OpenAI with prompt: ${prompt}`);
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o', // or your preferred model
        messages: [{ role: 'user', content: prompt }],
      });

      const response = completion.choices[0]?.message?.content;
      this.logger.log('Received from OpenAI:', response);

      return { response };
    } catch (error) {
      this.logger.error('OpenAI Error:', error.message);
      throw error;
    }
  }
}
