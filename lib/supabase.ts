import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Rule views functions
export async function incrementRuleView(slug: string) {
  try {
    // First check if the rule view exists
    const { data: existingView } = await supabase
      .from('rule_views')
      .select('count')
      .eq('slug', slug)
      .single()
    
    if (existingView) {
      // Update existing view count
      await supabase
        .from('rule_views')
        .update({ 
          count: existingView.count + 1,
          last_viewed_at: new Date().toISOString()
        })
        .eq('slug', slug)
    } else {
      // Insert new view record
      await supabase
        .from('rule_views')
        .insert({ 
          slug, 
          count: 1,
          last_viewed_at: new Date().toISOString()
        })
    }
  } catch (error) {
    console.error('Error incrementing rule view:', error)
  }
}

export async function getPopularRules(limit = 5) {
  try {
    const { data, error } = await supabase
      .from('rule_views')
      .select('slug, count')
      .order('count', { ascending: false })
      .limit(limit)
    
    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching popular rules:', error)
    return []
  }
} 