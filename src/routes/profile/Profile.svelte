<script lang="ts">
	import { supabase } from '$lib/supabase/supabaseClient';
	import { user } from '$lib/stores/sessionStore';
	import { createNewGroupAndJoin, groupByName, joinGroup } from '$lib/supabase/Groups';
	import { onMount } from 'svelte';
	let loading = true;
	let userData = null;
	let username = null;
	let groupName = '';
	let option = -999;

	onMount(async () => {
		await getProfile();
	});

	async function getProfile() {
		try {
			loading = true;
			let { data, error, status } = await supabase
				.from('Users')
				.select('*')
				.eq('email', $user.email)
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
			alert('Select an option.');
		}
		if (groupName === '') {
			alert('Group name is required.');
		}
		// check if group already exists if yes  then join directly else create and join
		try {
			loading = true;
			if (option === 1) {
				const groupData = await createNewGroupAndJoin(groupName, userData);
				if (groupData) alert(`Successfully created group ${groupData.name}`);
			}
			if (option === 2) {
				let data = await groupByName(groupName);
				//check if group exists, if yes then join else throw alert group doesn't exist
				if (data) {
					const groupData = await joinGroup(data, userData);
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
	<kor-card flat label="Update Profile Name">
		<kor-input label="Email"  value={$user.email} disabled/>
		<kor-input
			label="Name"
			on:change={(event) => (username = event.target.value)}
      status={userData && userData.name ? 'success' : 'warning'}
			value={userData ? userData.name : ''}
		/>
		<kor-button
			disabled={loading}
			on:click={updateProfile}
			slot="footer"
			label={loading ? 'Loading ...' : 'Update username'}
		/>
	</kor-card>
</kor-card>
