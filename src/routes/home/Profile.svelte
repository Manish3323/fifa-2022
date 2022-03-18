<script lang="ts">
  import { supabase } from "../../lib/supabase/supabaseClient";
  import { user } from "$lib/stores/sessionStore";
  import {
    createNewGroupAndJoin,
    groupByName,
    joinGroup,
  } from "$lib/supabase/Groups";
  let loading = true;
  let userData = null;
  let username = null;
  let groupName = "";
  let option = -999;
  async function getProfile() {
    try {
      loading = true;
      const user = supabase.auth.user();
      let { data, error, status } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user.email)
        .single();
      if (error && status !== 406) throw error;
      if (data) {
        userData = data;
        username = data.name;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  }

  async function createOrJoinGroup() {
    if (option === -999) {
      alert("Select an option.");
    }
    if (groupName === "") {
      alert("Group name is required.");
    }
    // check if group already exists if yes  then join directly else create and join
    try {
      loading = true;
      if (option === 1) {
        const groupData = await createNewGroupAndJoin(groupName, userData.id);
      }
      if (option === 2) {
        let data = await groupByName(groupName);
        //check if group exists, if yes then join else throw alert group doesn't exist
        if (data) {
          const groupData = await joinGroup(data, userData.id);
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  }
  async function updateProfile() {
    try {
      loading = true;
      const user = supabase.auth.user();
      const updates = {
        name: username,
        email: user.email,
        created_at: new Date(),
        current_score: 0,
        groupIds: [],
      };
      let { error } = await supabase.from("Users").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  }
</script>

{#if username}
  <form class="form" on:submit|preventDefault={createOrJoinGroup}>
    <div>
      <label class="padding-top">
        <input type="radio" bind:group={option} value={1} />
        Create Group
      </label>

      <label class="padding-top">
        <input type="radio" bind:group={option} value={2} />
        Join Group
      </label>
    </div>
    <input
      class="margin-top"
      id="groupname"
      type="text"
      bind:value={groupName}
      placeholder="Enter Group Name"
    />

    <button class="margin-top" disabled={loading}>
      {option === 1 ? "Create Group" : "Join Group"}</button
    >
  </form>
{/if}
<hr class="dashed" />
<form
  class="form padding-top"
  use:getProfile
  on:submit|preventDefault={updateProfile}
>
  <div>
    <label for="email">Email</label>
    <input
      class="width-25em"
      id="email"
      type="text"
      value={$user.email}
      disabled
    />
  </div>
  <div class="padding-top">
    <label for="username">Name</label>
    <input class="width-25em" id="username" type="text" bind:value={username} />
  </div>
  <div class="padding-top">
    <input
      type="submit"
      value={loading ? "Loading ..." : "Update username"}
      disabled={loading}
    />
  </div>
</form>

<style>
  .padding-top {
    padding-top: 1em;
  }
  .margin-top {
    margin-top: 1em;
  }
  .width-25em {
    width: 20em;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
  }
  hr.dashed {
    width: 35%;
    border-top: 3px dashed #bbb;
  }
</style>
