'use server';
import axios from 'axios';

export async function openaiAction(blogContent: string) {
  try {
    const response = await axios.post(
      process.env.OPENAI_API_URL || 'https://aiapi.dog/v1/chat/completions',
      {
        model: 'gpt-4o-mini', // 或者 "gpt-4" 等其他模型
        messages: [
          {
            role: 'system',
            content:
              '你是一个擅长SEO的助手，能够生成优化的博客摘要,请你直接返回总结的字符串，不要包含markdown语法。',
          },
          {
            role: 'user',
            content: `请根据以下博客内容生成一段总结，字数不超过250字，不低于200字，且包含适当的SEO关键词。博客内容如下：
                  ${blogContent}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
   return 'Error calling OpenAI API:';
  }
}
