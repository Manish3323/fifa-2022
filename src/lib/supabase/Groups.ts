import { supabase } from "./supabaseClient";
import type { User } from "./user";

type Group = {
  id: string;
  members: number[];
  name: string;
  created_at: string;
};

export const groupByName = async (name: string) => {
  const { data, error } = await supabase
    .from("Groups")
    .select(`*`)
    .eq("name", name)
    .single();
  if (error) throw Error(`Group ${name} does not exist.`);
  return data as Group;
};

export const joinGroup = async (groupData: Group, userData: User) => {
  const { data, error } = await supabase.from("Groups").upsert({
    id: groupData.id,
    members: [...groupData.members, userData.id],
  });
  if (error)
    throw Error(
      `Failed to join Group ${groupData.name}, reason: ${error.message}`
    );
  await updateUserWithGroupId(data[0].id, userData);
  return data[0] as Group;
};

export const createNewGroupAndJoin = async (
  groupName: string,
  userData: User
) => {
  const { data, error } = await supabase.from("Groups").insert({
    name: groupName,
    members: [userData.id],
  });
  if (error)
    throw Error(
      `Failed to create Group ${groupName}. reason: ${error.message}`
    );
  await updateUserWithGroupId(data[0].id, userData);
  return data[0] as Group;
};

export const updateUserWithGroupId = async (
  groupId: number,
  userData: User
) => {
  const { data, error } = await supabase.from("Users").upsert({
    id: userData.id,
    groupIds: [...userData.groupIds, groupId],
  });
  if (error)
    throw Error(`Failed to update ${userData.name}. reason: ${error.message}`);
  return data[0] as Group;
};
