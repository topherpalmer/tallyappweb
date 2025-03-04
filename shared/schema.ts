import { z } from "zod";

export const schoolSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.number(),
  mascot: z.string(),
  imageUrl: z.string().nullable(),
  schoolCodes: z.array(z.string()),
});

export const teamSchema = z.object({
  id: z.string(),
  mascotName: z.string(),
  wins: z.number(),
  losses: z.number(),
  record: z.string(),
  category: z.string(),
  level: z.string(),
  coachesName: z.string(),
  displayName: z.string(),
});

export const playerSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  height: z.string(),
  yearInSchool: z.string(),
  position: z.string(),
  number: z.string(),
});

export const gameSchema = z.object({
  id: z.string(),
  date: z.string(),
  location: z.string(),
  status: z.string(),
});

export type School = z.infer<typeof schoolSchema>;
export type Team = z.infer<typeof teamSchema>;
export type Player = z.infer<typeof playerSchema>;
export type Game = z.infer<typeof gameSchema>;
