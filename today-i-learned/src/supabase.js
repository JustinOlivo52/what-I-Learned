
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jrdkbemqyfkrkbdwmcgt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZGtiZW1xeWZrcmtiZHdtY2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxOTQ4OTQsImV4cCI6MTk5Mjc3MDg5NH0.EJTN0SQcGLonxvQ8Yq9AVhO4Dhia214BpPQOWKisZvI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;