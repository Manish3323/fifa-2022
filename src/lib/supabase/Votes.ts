import { supabase } from './supabaseClient';

export const saveBet = async (userId: number, matchId: number, vote: string) => {
	const { error } = await supabase.from('Votes').insert({
		userId,
		matchId,
		vote
	});

	if (error) throw Error(`Failed to submit vote. try again later.`);
	return true;
};
