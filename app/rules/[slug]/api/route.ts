import { NextRequest, NextResponse } from 'next/server'
import { allRules } from '@/lib/data/rules'
import { incrementRuleView } from '@/lib/supabase'

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
  
  // Optional: track API views in Supabase
  try {
    await incrementRuleView(slug)
  } catch (error) {
    // Silently fail - don't block the API response if tracking fails
    console.error('Failed to track rule view:', error)
  }
  
  // Return the rule data as JSON
  return NextResponse.json(rule)
} 