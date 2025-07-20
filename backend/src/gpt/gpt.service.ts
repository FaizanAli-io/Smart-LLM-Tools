import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private readonly logger = new Logger(GptService.name);
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async generateResponse(prompt: string): Promise<any> {
    this.logger.log(`Calling OpenAI with prompt:\n${prompt}`);

    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: "system",
            content: `
You are a helpful and professional assistant. Always respond in clear, formal British English. Avoid using em-dashes (—); use commas or full stops instead. Do not begin responses with generic disclaimers like "As an AI language model...". Tailor your answers appropriately based on the user's request, whether it's for analysis, explanation, or creative writing.
            `.trim(),
          },
          {
            role: "user",
            content: prompt.trim(),
          },
        ],
      });

      const response = completion.choices[0]?.message?.content?.trim();
      this.logger.log(`Generated response:\n${response}`);

      return { response };
    } catch (error) {
      this.logger.error('OpenAI Error:', error.message);
      throw error;
    }
  }
}
