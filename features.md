# Pages

## Page 0 - Join a group/platoon/gang/league

 Button to Create/Join a gang & store it somewhere on cloud

## Page 1 - Upcoming Matches

  to be able to show upcoming match(s), show odds, team's recent form,
  to be able to cast vote & save it somewhere on cloud

## Page 2 - My group/platoon/gang/league

  to be able to list league members (fetch from somewhere on cloud)
  show member's previous match votes & results

## Page 3 - Leaderboard

  show gang members in a list, along with some stats (fetch from somewhere on cloud).

---

## Backend Tables

- Users
  - Id
  - name
  - Current score
- Groups
  - Id
  - name
  - members
- Matches
  - Id
  - Date
  - Time
  - Venue
  - Result
  - Teams
- Votes
  - Id
  - matchId
  - userId
  - vote

---

Tech choices as of now

- [Sveltekit](https://kit.svelte.dev/) for app development
- [carbon components](https://carbon-components-svelte.onrender.com/components/Accordion) for styling
- [supabase]([https://](https://supabase.com/docs)) for storage & auth
- [rapidapi](https://rapidapi.com/api-sports/api/api-football/) for getting realtime fifa data
- [vercel](https://vercel.com/) for hosting
