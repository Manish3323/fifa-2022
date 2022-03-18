<script context="module" lang="ts">
  import { user } from "../../lib/stores/sessionStore";
  import { supabase } from "../../lib/supabase/supabaseClient";
  import Auth from "./Auth.svelte";
  import Profile from "./Profile.svelte";
  user.set(supabase.auth.user());
  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session.user);
  });
</script>

{#if $user}
  <Profile />
{:else}
  <Auth />
{/if}
