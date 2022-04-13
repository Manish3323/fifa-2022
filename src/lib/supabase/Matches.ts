import { supabase } from './supabaseClient';

export interface MatchType {
	id: number;
	home: string;
	away: string;
	commence_time: string;
	status: string;
	bookmaker: string;
	last_update: string;
	odd_1: number;
	odd_2: number;
	odd_draw: number;
	result: string;
}
export const getMatches = async () => {
	const { data, error } = await supabase
		.from('Events')
		.select('*')
		.order('commence_time', { ascending: true });
	if (error) alert(`Failed to load upcoming matches. reason: ${error.message}`);
	return data as MatchType[];
};

export const updateMatchResult = async (matchId: number, result: string) => {
	const { error } = await supabase
		.from('Events')
		.update({ result: result })
		.match({ id: matchId });
	if (error) alert(`Failed to update result. reason: ${error.message}`);
	return true;
};
