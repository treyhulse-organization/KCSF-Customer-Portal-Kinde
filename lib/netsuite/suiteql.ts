// /lib/netsuite/suiteql.ts

import { netsuiteClient } from '@/lib/netsuite/config'

export interface SuiteQLResult {
  [key: string]: string | number | boolean | null;
}

export interface PaginatedSuiteQLResult {
  items: SuiteQLResult[];
  hasMore: boolean;
  offset: number;
  count: number;
}

export async function executeSuiteQL(
  query: string,
  params?: { [key: string]: string | number }
): Promise<SuiteQLResult[]> {
  let allItems: SuiteQLResult[] = [];
  let offset = 0;
  const limit = 1000;
  let hasMore = true;

  // Replace params in query if they exist
  let processedQuery = query;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      const processedValue = typeof value === 'string' ? `'${value}'` : value;
      processedQuery = processedQuery.replace(new RegExp(`:${key}`, 'g'), String(processedValue));
    });
  }

  while (hasMore) {
    const url = `https://${netsuiteClient.realm}.suitetalk.api.netsuite.com/services/rest/query/v1/suiteql?limit=${limit}&offset=${offset}`;
    
    try {
      console.log('=== SuiteQL Request ===');
      console.log('URL:', url);
      console.log('Query:', processedQuery);
      console.log('Parameters:', params);
      console.log('Offset:', offset);
      console.log('Limit:', limit);
      
      const response = await netsuiteClient.request(url, 'POST', { q: processedQuery }, {
        'Prefer': 'transient'
      });

      console.log('=== SuiteQL Response ===');
      console.log('Status:', response ? 'Success' : 'Failed');
      console.log('Items Count:', response?.items?.length || 0);
      console.log('Has More:', response?.hasMore || false);
      
      if (!response || !Array.isArray(response.items)) {
        console.error('Invalid response format:', response);
        throw new Error('Invalid response format from NetSuite SuiteQL API');
      }

      allItems = allItems.concat(response.items);
      hasMore = response.hasMore || false;
      offset += limit;
    } catch (error) {
      console.error('=== SuiteQL Error ===');
      console.error('Error Type:', error instanceof Error ? error.constructor.name : typeof error);
      console.error('Error Message:', error instanceof Error ? error.message : String(error));
      console.error('Full Error:', error);
      throw error;
    }
  }

  return allItems;
}