import { supabase } from './supabaseClient';

export type User = {
	id: number;
	created_at: string;
	name: string;
	current_score: number;
	email: string;
	groupIds: number[];
};

export const leaderboardUsers = async () => {
	const { data, error } = await supabase
		.from<User>('Users')
		.select(`*`)
		.order(`current_score`, { ascending: false });
	if (error) {
		console.error(error);
		return [];
	}
	return data;
};

export const getUserByMail = async (email: string) =>
	await supabase.from<User>('Users').select('*').eq('email', email).single();
