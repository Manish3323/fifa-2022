import { writable } from "svelte/store";
import type { Session } from "@supabase/supabase-js";

export const user = writable<Session["user"]>();

export interface Group {
  id: number;
  name: string;
  members: number[];
  created_at: string;
}
