import OpenAI from 'openai';
import { HttpsProxyAgent } from 'https-proxy-agent';

export function getOpenAIclient(): OpenAI {
    // 使用已经确认可用的代理配置
    const proxyUrl = 'http://127.0.0.1:7890';
    const proxyAgent = new HttpsProxyAgent(proxyUrl);

    const client = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'],
        httpAgent: proxyAgent,
        timeout: 120000,  // 2分钟超时
        maxRetries: 3,    // 最多重试3次
    });

    return client;
}
