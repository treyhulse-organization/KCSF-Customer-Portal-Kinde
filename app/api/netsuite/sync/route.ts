import { dumpTransactions } from '@/lib/supabase/dump'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const result = await dumpTransactions()
    return NextResponse.json(result)
  } catch (error) {
    console.error('Sync error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 