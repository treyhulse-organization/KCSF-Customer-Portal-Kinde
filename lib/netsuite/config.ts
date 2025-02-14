import OAuth from 'oauth-1.0a';
import crypto from 'crypto';

export function createNetSuiteClient() {
  const oauth = new OAuth({
    consumer: {
      key: process.env.NETSUITE_CONSUMER_KEY || '',     // Consumer Key
      secret: process.env.NETSUITE_CONSUMER_SECRET || '', // Consumer Secret
    },
    signature_method: 'HMAC-SHA256',
    hash_function: (base_string, key) => 
      crypto.createHmac('sha256', key).update(base_string).digest('base64')
  });

  return {
    realm: process.env.NETSUITE_REALM || '',
    
    async request(url: string, method: string, body?: any, additionalHeaders: Record<string, string> = {}) {
      const requestData = { url, method, data: body };
      const authHeader = oauth.toHeader(oauth.authorize(requestData, {
        key: process.env.NETSUITE_TOKEN_KEY || '',
        secret: process.env.NETSUITE_TOKEN_SECRET || '',
      }));

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...authHeader,
          ...additionalHeaders,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`NetSuite API error: ${response.status} ${response.statusText}`);
      }

      return response.json();
    }
  };
}

export const netsuiteClient = createNetSuiteClient(); 