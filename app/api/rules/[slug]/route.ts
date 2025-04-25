import { NextRequest, NextResponse } from 'next/server'
import { allRules } from '@/lib/data/rules'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params
  
  // Find the rule by slug
  const rule = allRules.find(rule => rule.slug === slug)
  
  if (!rule) {
    return NextResponse.json(
      { error: 'Rule not found' }, 
      { status: 404 }
    )
  }
  
  // Return the rule data as JSON
  return NextResponse.json(rule)
} 