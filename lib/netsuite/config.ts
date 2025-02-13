import OAuth from 'oauth-1.0a';
import crypto from 'crypto';

export const getNetSuiteConfig = () => {
  const realm = process.env.NETSUITE_REALM || '';
  const tokenKey = process.env.NETSUITE_TOKEN_KEY || '';
  const tokenSecret = process.env.NETSUITE_TOKEN_SECRET || '';
  const consumerKey = process.env.NETSUITE_CONSUMER_KEY || '';
  const consumerSecret = process.env.NETSUITE_CONSUMER_SECRET || '';

  const oauth = new OAuth({
    consumer: { key: consumerKey, secret: consumerSecret },
    signature_method: 'HMAC-SHA256',
    hash_function: (base_string, key) => 
      crypto.createHmac('sha256', key).update(base_string).digest('base64')
  });

  return { realm, tokenKey, tokenSecret, oauth };
}; 