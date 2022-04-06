import { supabase } from './supabaseClient';

export const saveBet = async (userId: number, matchId: number, vote: string) => {
	const { error } = await supabase.from('Votes').upsert({
		userId,
		matchId,
		vote
	});
	if (error) throw Error(`${userId}, ${matchId}, ${vote} Failed to submit vote. try again later. ${error.message}`);
	return true;
};
