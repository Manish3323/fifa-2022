import { writable } from "svelte/store";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../supabase/supabaseClient";
const authenticatedUser = supabase.auth.user();
export const user = writable<Session["user"]>(authenticatedUser);

export interface Group {
  id: number;
  name: string;
  members: number[];
  created_at: string;
}
