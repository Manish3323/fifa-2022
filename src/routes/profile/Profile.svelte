<script lang="ts">
	import { supabase } from '$lib/supabase/supabaseClient';
	import { userStore } from '$lib/stores/userStore';
	import { createNewGroupAndJoin, groupByName, joinGroup } from '$lib/supabase/Groups';
	import { onMount } from 'svelte';
	let loading = false;
	let user = null;
	let username = null;
	let groupName = '';
	let option = -999;
	userStore.subscribe((userData) => {
		user = userData;
		username = userData.name;
	});

	async function createOrJoinGroup() {
		if (option === -999) {
			alert('Select an option.');
		}
		if (groupName === '') {
			alert('Group name is required.');
		}
		// check if group already exists if yes  then join directly else create and join
		try {
			loading = true;
			if (option === 1) {
				const groupData = await createNewGroupAndJoin(groupName, user);
				if (groupData) alert(`Successfully created group ${groupData.name}`);
			}
			if (option === 2) {
				let data = await groupByName(groupName);
				//check if group exists, if yes then join else throw alert group doesn't exist
				if (data) {
					const groupData = await joinGroup(data, user);
					if (groupData) alert(`Successfully joined group ${groupData.name}`);
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
				email: user.email
			};
			let { error } = await supabase.from('Users').upsert(updates, {
				returning: 'minimal' // Don't return the value after inserting
			});
			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}
</script>

<kor-card flat>
	{#if username}
		<kor-card flat label="Group">
			<kor-radio-button label="Create" on:click={() => (option = 1)} />
			<kor-radio-button label="Join " on:click={() => (option = 2)} />
			<kor-textarea label="Group Name" on:change={(event) => (groupName = event.target.value)} />
			<kor-button
				disabled={loading}
				on:click={createOrJoinGroup}
				slot="footer"
				label={option == 1 ? 'Create' : 'Join'}
			/>
		</kor-card>
		<kor-divider spacing="l" />
	{/if}
	{#if user}
		<kor-card flat label="Update Profile Name">
			<kor-input label="Email" value={user.email} disabled />
			<kor-input
				label="Name"
				on:change={(event) => (username = event.target.value)}
				status={user && user.name ? 'success' : 'warning'}
				value={user ? user.name : ''}
			/>
			<kor-button
				disabled={loading}
				on:click={updateProfile}
				slot="footer"
				label={loading ? 'Loading ...' : 'Update username'}
			/>
		</kor-card>
	{/if}
</kor-card>
