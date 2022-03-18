import { supabase } from "./supabaseClient";

type Group = {
  id: string;
  members: number[];
  name: string;
  created_at: string;
};
export const groupByName = async (name: string) => {
  let { data, error, status } = await supabase
    .from("Groups")
    .select(`*`)
    .eq("name", name)
    .single();
  if (error) throw Error(`Group ${name} does not exist.`);
  return data as Group;
};

export const joinGroup = async (groupData: Group, memberId: number) => {
  console.log(groupData)
  let { data, error } = await supabase.from("Groups").upsert(
    {
      id: groupData.id,
      members: [...groupData.members.map(x=> Number(x)), memberId],
    }
  );
  if (error) throw Error(`Failed to join Group ${groupData.name}, reason: ${error.message}`);
  return data
};

export const createNewGroupAndJoin = async (groupName: string, memberId: number) => {
  const groupExists = await groupByName(groupName)
  if(!!groupExists) {
    throw Error(`Group ${groupName} already exist.`);
  }
  let { data, error } = await supabase.from("Groups").insert(
    {
      name: groupName,
      members: [memberId],
    }
  );
  if (error) throw Error(`Failed to create Group ${groupName}.`);
  return data
};
