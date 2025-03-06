import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type AdminUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StatsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamLevelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamStatsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TallyImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SeasonOfPlayMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SportMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SchoolMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UIProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LeagueMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConferenceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DistrictMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MediaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CurrentSportsSeasonMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersFavsTeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerStatsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GameMediaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamPlayersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerAdminUser = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly nickName?: string | null;
  readonly subId?: string | null;
  readonly invitedByUserId?: string | null;
  readonly type?: string | null;
  readonly teamId: string;
  readonly gameId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdminUser = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly nickName?: string | null;
  readonly subId?: string | null;
  readonly invitedByUserId?: string | null;
  readonly type?: string | null;
  readonly teamId: string;
  readonly gameId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AdminUser = LazyLoading extends LazyLoadingDisabled ? EagerAdminUser : LazyAdminUser

export declare const AdminUser: (new (init: ModelInit<AdminUser, AdminUserMetaData>) => AdminUser) & {
  copyOf(source: AdminUser, mutator: (draft: MutableModel<AdminUser, AdminUserMetaData>) => MutableModel<AdminUser, AdminUserMetaData> | void): AdminUser;
}

type EagerUser = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly nickName?: string | null;
  readonly subId?: string | null;
  readonly favoriteTeams?: (UsersFavsTeam | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly nickName?: string | null;
  readonly subId?: string | null;
  readonly favoriteTeams: AsyncCollection<UsersFavsTeam>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerStats = {
  readonly id: string;
  readonly points?: number | null;
  readonly rebounds?: number | null;
  readonly assists?: number | null;
  readonly fouls?: number | null;
  readonly shotsTaken?: number | null;
  readonly threePointersTaken?: number | null;
  readonly threePointersMade?: number | null;
  readonly gameId: string;
  readonly players?: (PlayerStats | null)[] | null;
  readonly type?: string | null;
  readonly teamId?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStats = {
  readonly id: string;
  readonly points?: number | null;
  readonly rebounds?: number | null;
  readonly assists?: number | null;
  readonly fouls?: number | null;
  readonly shotsTaken?: number | null;
  readonly threePointersTaken?: number | null;
  readonly threePointersMade?: number | null;
  readonly gameId: string;
  readonly players: AsyncCollection<PlayerStats>;
  readonly type?: string | null;
  readonly teamId?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Stats = LazyLoading extends LazyLoadingDisabled ? EagerStats : LazyStats

export declare const Stats: (new (init: ModelInit<Stats, StatsMetaData>) => Stats) & {
  copyOf(source: Stats, mutator: (draft: MutableModel<Stats, StatsMetaData>) => MutableModel<Stats, StatsMetaData> | void): Stats;
}

type EagerGame = {
  readonly id: string;
  readonly date?: string | null;
  readonly location?: string | null;
  readonly visitorTeamId?: string | null;
  readonly homeTeamId?: string | null;
  readonly status?: string | null;
  readonly visitingTeamStatsId?: string | null;
  readonly homeTeamStatsId?: string | null;
  readonly visitingTeamStats?: TeamStats | null;
  readonly homeTeamStats?: TeamStats | null;
  readonly scoreKeepers?: (AdminUser | null)[] | null;
  readonly media?: (GameMedia | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGame = {
  readonly id: string;
  readonly date?: string | null;
  readonly location?: string | null;
  readonly visitorTeamId?: string | null;
  readonly homeTeamId?: string | null;
  readonly status?: string | null;
  readonly visitingTeamStatsId?: string | null;
  readonly homeTeamStatsId?: string | null;
  readonly visitingTeamStats: AsyncItem<TeamStats | undefined>;
  readonly homeTeamStats: AsyncItem<TeamStats | undefined>;
  readonly scoreKeepers: AsyncCollection<AdminUser>;
  readonly media: AsyncCollection<GameMedia>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Game = LazyLoading extends LazyLoadingDisabled ? EagerGame : LazyGame

export declare const Game: (new (init: ModelInit<Game, GameMetaData>) => Game) & {
  copyOf(source: Game, mutator: (draft: MutableModel<Game, GameMetaData>) => MutableModel<Game, GameMetaData> | void): Game;
}

type EagerTeamLevel = {
  readonly id: string;
  readonly levelName?: string | null;
  readonly levelDisplayName?: string | null;
  readonly sortOrder?: number | null;
  readonly year?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamLevel = {
  readonly id: string;
  readonly levelName?: string | null;
  readonly levelDisplayName?: string | null;
  readonly sortOrder?: number | null;
  readonly year?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamLevel = LazyLoading extends LazyLoadingDisabled ? EagerTeamLevel : LazyTeamLevel

export declare const TeamLevel: (new (init: ModelInit<TeamLevel, TeamLevelMetaData>) => TeamLevel) & {
  copyOf(source: TeamLevel, mutator: (draft: MutableModel<TeamLevel, TeamLevelMetaData>) => MutableModel<TeamLevel, TeamLevelMetaData> | void): TeamLevel;
}

type EagerTeamStats = {
  readonly id: string;
  readonly gameId: string;
  readonly points: number;
  readonly rebounds?: number | null;
  readonly assists?: number | null;
  readonly fouls?: number | null;
  readonly shotsTaken?: number | null;
  readonly threePointersTaken?: number | null;
  readonly threePointersMade?: number | null;
  readonly type?: string | null;
  readonly teamId?: string | null;
  readonly timeouts?: number | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamStats = {
  readonly id: string;
  readonly gameId: string;
  readonly points: number;
  readonly rebounds?: number | null;
  readonly assists?: number | null;
  readonly fouls?: number | null;
  readonly shotsTaken?: number | null;
  readonly threePointersTaken?: number | null;
  readonly threePointersMade?: number | null;
  readonly type?: string | null;
  readonly teamId?: string | null;
  readonly timeouts?: number | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamStats = LazyLoading extends LazyLoadingDisabled ? EagerTeamStats : LazyTeamStats

export declare const TeamStats: (new (init: ModelInit<TeamStats, TeamStatsMetaData>) => TeamStats) & {
  copyOf(source: TeamStats, mutator: (draft: MutableModel<TeamStats, TeamStatsMetaData>) => MutableModel<TeamStats, TeamStatsMetaData> | void): TeamStats;
}

type EagerPlayer = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly height?: string | null;
  readonly yearInSchool?: string | null;
  readonly position?: string | null;
  readonly number?: string | null;
  readonly stats?: (PlayerStats | null)[] | null;
  readonly teams?: (TeamPlayers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayer = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly height?: string | null;
  readonly yearInSchool?: string | null;
  readonly position?: string | null;
  readonly number?: string | null;
  readonly stats: AsyncCollection<PlayerStats>;
  readonly teams: AsyncCollection<TeamPlayers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player, PlayerMetaData>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}

type EagerTeam = {
  readonly id: string;
  readonly mascotName?: string | null;
  readonly wins?: number | null;
  readonly losses?: number | null;
  readonly players?: (TeamPlayers | null)[] | null;
  readonly createUserID?: string | null;
  readonly record?: string | null;
  readonly seasonOfPlay?: SeasonOfPlay | null;
  readonly teamSportId: string;
  readonly sport?: Sport | null;
  readonly schoolID: string;
  readonly category?: string | null;
  readonly level?: string | null;
  readonly teamLevelId?: string | null;
  readonly levelOfTeam?: TeamLevel | null;
  readonly coachesName?: string | null;
  readonly managers?: (AdminUser | null)[] | null;
  readonly coachesID?: string | null;
  readonly displayName?: string | null;
  readonly leagueId?: string | null;
  readonly districtId?: string | null;
  readonly conferenceId?: string | null;
  readonly league?: League | null;
  readonly media?: (Media | null)[] | null;
  readonly images?: (TallyImage | null)[] | null;
  readonly usersThatFavorited?: (UsersFavsTeam | null)[] | null;
  readonly district?: District | null;
  readonly conference?: Conference | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamSeasonOfPlayId?: string | null;
}

type LazyTeam = {
  readonly id: string;
  readonly mascotName?: string | null;
  readonly wins?: number | null;
  readonly losses?: number | null;
  readonly players: AsyncCollection<TeamPlayers>;
  readonly createUserID?: string | null;
  readonly record?: string | null;
  readonly seasonOfPlay: AsyncItem<SeasonOfPlay | undefined>;
  readonly teamSportId: string;
  readonly sport: AsyncItem<Sport | undefined>;
  readonly schoolID: string;
  readonly category?: string | null;
  readonly level?: string | null;
  readonly teamLevelId?: string | null;
  readonly levelOfTeam: AsyncItem<TeamLevel | undefined>;
  readonly coachesName?: string | null;
  readonly managers: AsyncCollection<AdminUser>;
  readonly coachesID?: string | null;
  readonly displayName?: string | null;
  readonly leagueId?: string | null;
  readonly districtId?: string | null;
  readonly conferenceId?: string | null;
  readonly league: AsyncItem<League | undefined>;
  readonly media: AsyncCollection<Media>;
  readonly images: AsyncCollection<TallyImage>;
  readonly usersThatFavorited: AsyncCollection<UsersFavsTeam>;
  readonly district: AsyncItem<District | undefined>;
  readonly conference: AsyncItem<Conference | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamSeasonOfPlayId?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team, TeamMetaData>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}

type EagerTallyImage = {
  readonly id: string;
  readonly url?: string | null;
  readonly name?: string | null;
  readonly formFactor?: string | null;
  readonly teamId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTallyImage = {
  readonly id: string;
  readonly url?: string | null;
  readonly name?: string | null;
  readonly formFactor?: string | null;
  readonly teamId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TallyImage = LazyLoading extends LazyLoadingDisabled ? EagerTallyImage : LazyTallyImage

export declare const TallyImage: (new (init: ModelInit<TallyImage, TallyImageMetaData>) => TallyImage) & {
  copyOf(source: TallyImage, mutator: (draft: MutableModel<TallyImage, TallyImageMetaData>) => MutableModel<TallyImage, TallyImageMetaData> | void): TallyImage;
}

type EagerSeasonOfPlay = {
  readonly id: string;
  readonly year?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySeasonOfPlay = {
  readonly id: string;
  readonly year?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SeasonOfPlay = LazyLoading extends LazyLoadingDisabled ? EagerSeasonOfPlay : LazySeasonOfPlay

export declare const SeasonOfPlay: (new (init: ModelInit<SeasonOfPlay, SeasonOfPlayMetaData>) => SeasonOfPlay) & {
  copyOf(source: SeasonOfPlay, mutator: (draft: MutableModel<SeasonOfPlay, SeasonOfPlayMetaData>) => MutableModel<SeasonOfPlay, SeasonOfPlayMetaData> | void): SeasonOfPlay;
}

type EagerSport = {
  readonly id: string;
  readonly name?: string | null;
  readonly seasonOfYear?: string | null;
  readonly displayName?: string | null;
  readonly status?: string | null;
  readonly sortOrder?: number | null;
  readonly year?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySport = {
  readonly id: string;
  readonly name?: string | null;
  readonly seasonOfYear?: string | null;
  readonly displayName?: string | null;
  readonly status?: string | null;
  readonly sortOrder?: number | null;
  readonly year?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sport = LazyLoading extends LazyLoadingDisabled ? EagerSport : LazySport

export declare const Sport: (new (init: ModelInit<Sport, SportMetaData>) => Sport) & {
  copyOf(source: Sport, mutator: (draft: MutableModel<Sport, SportMetaData>) => MutableModel<Sport, SportMetaData> | void): Sport;
}

type EagerSchool = {
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly zipcode?: number | null;
  readonly state?: string | null;
  readonly mascot?: string | null;
  readonly imageUrl?: string | null;
  readonly schoolCodes?: (string | null)[] | null;
  readonly teams?: (Team | null)[] | null;
  readonly uiProfileId?: string | null;
  readonly uiProfile?: UIProfile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchool = {
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly zipcode?: number | null;
  readonly state?: string | null;
  readonly mascot?: string | null;
  readonly imageUrl?: string | null;
  readonly schoolCodes?: (string | null)[] | null;
  readonly teams: AsyncCollection<Team>;
  readonly uiProfileId?: string | null;
  readonly uiProfile: AsyncItem<UIProfile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type School = LazyLoading extends LazyLoadingDisabled ? EagerSchool : LazySchool

export declare const School: (new (init: ModelInit<School, SchoolMetaData>) => School) & {
  copyOf(source: School, mutator: (draft: MutableModel<School, SchoolMetaData>) => MutableModel<School, SchoolMetaData> | void): School;
}

type EagerUIProfile = {
  readonly id: string;
  readonly baseColor: string;
  readonly secondaryColor: string;
  readonly tertiaryColor?: string | null;
  readonly primaryImage?: string | null;
  readonly secondaryImage?: string | null;
  readonly shopifyStatus?: string | null;
  readonly shopifyURL?: string | null;
  readonly shopifyToken?: string | null;
  readonly teams?: (Team | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUIProfile = {
  readonly id: string;
  readonly baseColor: string;
  readonly secondaryColor: string;
  readonly tertiaryColor?: string | null;
  readonly primaryImage?: string | null;
  readonly secondaryImage?: string | null;
  readonly shopifyStatus?: string | null;
  readonly shopifyURL?: string | null;
  readonly shopifyToken?: string | null;
  readonly teams: AsyncCollection<Team>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UIProfile = LazyLoading extends LazyLoadingDisabled ? EagerUIProfile : LazyUIProfile

export declare const UIProfile: (new (init: ModelInit<UIProfile, UIProfileMetaData>) => UIProfile) & {
  copyOf(source: UIProfile, mutator: (draft: MutableModel<UIProfile, UIProfileMetaData>) => MutableModel<UIProfile, UIProfileMetaData> | void): UIProfile;
}

type EagerLeague = {
  readonly id: string;
  readonly name?: string | null;
  readonly seasonOfYear?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLeague = {
  readonly id: string;
  readonly name?: string | null;
  readonly seasonOfYear?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type League = LazyLoading extends LazyLoadingDisabled ? EagerLeague : LazyLeague

export declare const League: (new (init: ModelInit<League, LeagueMetaData>) => League) & {
  copyOf(source: League, mutator: (draft: MutableModel<League, LeagueMetaData>) => MutableModel<League, LeagueMetaData> | void): League;
}

type EagerConference = {
  readonly id: string;
  readonly name?: string | null;
  readonly seasonOfYear?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConference = {
  readonly id: string;
  readonly name?: string | null;
  readonly seasonOfYear?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conference = LazyLoading extends LazyLoadingDisabled ? EagerConference : LazyConference

export declare const Conference: (new (init: ModelInit<Conference, ConferenceMetaData>) => Conference) & {
  copyOf(source: Conference, mutator: (draft: MutableModel<Conference, ConferenceMetaData>) => MutableModel<Conference, ConferenceMetaData> | void): Conference;
}

type EagerDistrict = {
  readonly id: string;
  readonly name?: string | null;
  readonly seasonOfYear?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDistrict = {
  readonly id: string;
  readonly name?: string | null;
  readonly seasonOfYear?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type District = LazyLoading extends LazyLoadingDisabled ? EagerDistrict : LazyDistrict

export declare const District: (new (init: ModelInit<District, DistrictMetaData>) => District) & {
  copyOf(source: District, mutator: (draft: MutableModel<District, DistrictMetaData>) => MutableModel<District, DistrictMetaData> | void): District;
}

type EagerMedia = {
  readonly id: string;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly timesPlayed?: number | null;
  readonly teamId: string;
  readonly game?: (GameMedia | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedia = {
  readonly id: string;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly timesPlayed?: number | null;
  readonly teamId: string;
  readonly game: AsyncCollection<GameMedia>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Media = LazyLoading extends LazyLoadingDisabled ? EagerMedia : LazyMedia

export declare const Media: (new (init: ModelInit<Media, MediaMetaData>) => Media) & {
  copyOf(source: Media, mutator: (draft: MutableModel<Media, MediaMetaData>) => MutableModel<Media, MediaMetaData> | void): Media;
}

type EagerCurrentSportsSeason = {
  readonly id: string;
  readonly year?: string | null;
  readonly seasonName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCurrentSportsSeason = {
  readonly id: string;
  readonly year?: string | null;
  readonly seasonName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CurrentSportsSeason = LazyLoading extends LazyLoadingDisabled ? EagerCurrentSportsSeason : LazyCurrentSportsSeason

export declare const CurrentSportsSeason: (new (init: ModelInit<CurrentSportsSeason, CurrentSportsSeasonMetaData>) => CurrentSportsSeason) & {
  copyOf(source: CurrentSportsSeason, mutator: (draft: MutableModel<CurrentSportsSeason, CurrentSportsSeasonMetaData>) => MutableModel<CurrentSportsSeason, CurrentSportsSeasonMetaData> | void): CurrentSportsSeason;
}

type EagerUsersFavsTeam = {
  readonly id: string;
  readonly user: User;
  readonly team: Team;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersFavsTeam = {
  readonly id: string;
  readonly user: AsyncItem<User>;
  readonly team: AsyncItem<Team>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersFavsTeam = LazyLoading extends LazyLoadingDisabled ? EagerUsersFavsTeam : LazyUsersFavsTeam

export declare const UsersFavsTeam: (new (init: ModelInit<UsersFavsTeam, UsersFavsTeamMetaData>) => UsersFavsTeam) & {
  copyOf(source: UsersFavsTeam, mutator: (draft: MutableModel<UsersFavsTeam, UsersFavsTeamMetaData>) => MutableModel<UsersFavsTeam, UsersFavsTeamMetaData> | void): UsersFavsTeam;
}

type EagerPlayerStats = {
  readonly id: string;
  readonly stats: Stats;
  readonly player: Player;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayerStats = {
  readonly id: string;
  readonly stats: AsyncItem<Stats>;
  readonly player: AsyncItem<Player>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayerStats = LazyLoading extends LazyLoadingDisabled ? EagerPlayerStats : LazyPlayerStats

export declare const PlayerStats: (new (init: ModelInit<PlayerStats, PlayerStatsMetaData>) => PlayerStats) & {
  copyOf(source: PlayerStats, mutator: (draft: MutableModel<PlayerStats, PlayerStatsMetaData>) => MutableModel<PlayerStats, PlayerStatsMetaData> | void): PlayerStats;
}

type EagerGameMedia = {
  readonly id: string;
  readonly game: Game;
  readonly media: Media;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGameMedia = {
  readonly id: string;
  readonly game: AsyncItem<Game>;
  readonly media: AsyncItem<Media>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GameMedia = LazyLoading extends LazyLoadingDisabled ? EagerGameMedia : LazyGameMedia

export declare const GameMedia: (new (init: ModelInit<GameMedia, GameMediaMetaData>) => GameMedia) & {
  copyOf(source: GameMedia, mutator: (draft: MutableModel<GameMedia, GameMediaMetaData>) => MutableModel<GameMedia, GameMediaMetaData> | void): GameMedia;
}

type EagerTeamPlayers = {
  readonly id: string;
  readonly player: Player;
  readonly team: Team;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamPlayers = {
  readonly id: string;
  readonly player: AsyncItem<Player>;
  readonly team: AsyncItem<Team>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamPlayers = LazyLoading extends LazyLoadingDisabled ? EagerTeamPlayers : LazyTeamPlayers

export declare const TeamPlayers: (new (init: ModelInit<TeamPlayers, TeamPlayersMetaData>) => TeamPlayers) & {
  copyOf(source: TeamPlayers, mutator: (draft: MutableModel<TeamPlayers, TeamPlayersMetaData>) => MutableModel<TeamPlayers, TeamPlayersMetaData> | void): TeamPlayers;
}