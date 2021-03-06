import { supabase } from '$lib/supabase/supabaseClient';

export type User = {
	id: number;
	created_at: string;
	name: string;
	current_score: number;
	email: string;
	groupIds: number[];
	Votes: Vote[]
	admin: boolean
};

export interface Vote {
	id: number;
	created_at: string;
	vote: string;
	userId: number;
	matchId: number;
}

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
	await supabase.from<User>('Users').select('*, Votes(*)').eq('email', email).single();
