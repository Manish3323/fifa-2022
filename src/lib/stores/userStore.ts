import { writable } from 'svelte/store';
import { supabase } from '../supabase/supabaseClient';
import { getUserByMail, type User } from '../supabase/User';

const createUserStore = () => {
	const userData = null;
	const { subscribe, set } = writable<User>(userData);

	return {
		subscribe,
		init: async () => {
			const authenticatedUser = supabase.auth.user();
			supabase.auth.onAuthStateChange(async () => {
				const { data } = await getUserByMail(authenticatedUser?.email);
				set(data);
			});

			if (authenticatedUser) {
				const { data } = await getUserByMail(authenticatedUser?.email);
				set(data);
			}
		},
		reset: () => set(null)
	};
};

export const userStore = createUserStore()