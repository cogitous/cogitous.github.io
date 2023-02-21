import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cwussdmcxncpwjjkxglp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3dXNzZG1jeG5jcHdqamt4Z2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5MjYxNDcsImV4cCI6MTk5MjUwMjE0N30.aL-KC6eResmj8ZI6Rn7ezESCuAOWX2uK6I5wXfK0-DQ';

let supabase: SupabaseClient;

export function getClient() {
  if (supabase) return supabase;
  supabase = createClient(supabaseUrl, supabaseKey);

  return supabase;
};