# Pages

## Page 0 - Join a group/platoon/gang/league

- Button to Create/Join a gang & store it somewhere on cloud

## Page 1 - Upcoming Matches

- Show upcoming match(s), show odds
- Cast vote & save it somewhere on cloud

## Page 2 - My group/platoon/gang/league

- List league members (fetch from somewhere on cloud)
- Show member's previous match votes & results

## Page 3 - Leaderboard

- Show gang members in a list, along with some stats (fetch from somewhere on cloud).

---

## Backend Tables

[definations of tables found in definations](./types/supabase.ts)

## TODO

when the event table row's status changes from:
  pending to started -> push notifications
  started to finished -> push notifications & trigger database function which will update the user's score & update event's status from finished to completed.

Add a form on ui against each event to update result by admin user.

---

Tech choices as of now

- [Sveltekit](https://kit.svelte.dev/) for app development
- [carbon components](https://carbon-components-svelte.onrender.com/components/Accordion) for styling
- [supabase]([https://](https://supabase.com/docs)) for storage & auth
- [rapidapi](https://rapidapi.com/api-sports/api/api-football/) for getting realtime fifa data
- [vercel](https://vercel.com/) for hosting
