// utils/supabase.ts
import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
  )

export const saveGameResult = async (gameName: string, playerName: string, score: number) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('game-results')
    .insert([{ game_name: gameName, player_name: playerName, score: score }]);

  if (error) throw error;
  return data;
}