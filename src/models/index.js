// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema.js';



const { AdminUser, User, Stats, Game, TeamLevel, TeamStats, Player, Team, TallyImage, SeasonOfPlay, Sport, School, UIProfile, League, Conference, District, Media, CurrentSportsSeason, UsersFavsTeam, PlayerStats, GameMedia, TeamPlayers } = initSchema(schema);

export {
  AdminUser,
  User,
  Stats,
  Game,
  TeamLevel,
  TeamStats,
  Player,
  Team,
  TallyImage,
  SeasonOfPlay,
  Sport,
  School,
  UIProfile,
  League,
  Conference,
  District,
  Media,
  CurrentSportsSeason,
  UsersFavsTeam,
  PlayerStats,
  GameMedia,
  TeamPlayers
};