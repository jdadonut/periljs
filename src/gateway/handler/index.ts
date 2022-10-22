import Gateway from '..';
import READY from './READY';
import GUILD_CREATE from './GUILD_CREATE';
import GUILD_UPDATE from './GUILD_UPDATE';
import GUILD_DELETE from './GUILD_DELETE';
import GUILD_MEMBERS_CHUNK from './GUILD_MEMBERS_CHUNK';
import GUILD_BAN_ADD from './GUILD_BAN_ADD';
import GUILD_BAN_REMOVE from './GUILD_BAN_REMOVE';
import MESSAGE_CREATE from './MESSAGE_CREATE';
import MESSAGE_UPDATE from './MESSAGE_UPDATE';
import MESSAGE_DELETE from './MESSAGE_DELETE';
import MESSAGE_REACTION_ADD from './MESSAGE_REACTION_ADD';
import MESSAGE_REACTION_REMOVE from './MESSAGE_REACTION_REMOVE';
import INTERACTION_CREATE from './INTERACTION_CREATE';
import CHANNEL_CREATE from './CHANNEL_CREATE';
import CHANNEL_UPDATE from './CHANNEL_UPDATE';
import CHANNEL_DELETE from './CHANNEL_DELETE';
import THREAD_CREATE from './THREAD_CREATE';
import THREAD_DELETE from './THREAD_DELETE';
import THREAD_UPDATE from './THREAD_UPDATE';
import THREAD_MEMBER_UPDATE from './THREAD_MEMBER_UPDATE';
import GUILD_ROLE_CREATE from './GUILD_ROLE_CREATE';
import GUILD_ROLE_DELETE from './GUILD_ROLE_DELETE';
import GUILD_MEMBER_ADD from './GUILD_MEMBER_ADD';
import GUILD_MEMBER_REMOVE from './GUILD_MEMBER_REMOVE';
import GUILD_MEMBER_UPDATE from './GUILD_MEMBER_UPDATE';
import GUILD_ROLE_UPDATE from './GUILD_ROLE_UPDATE';
import CHANNEL_PINS_UPDATE from './CHANNEL_PINS_UPDATE';

export default {
  READY,
  GUILD_CREATE,
  CHANNEL_CREATE,
  CHANNEL_UPDATE,
  MESSAGE_CREATE,
  MESSAGE_UPDATE,
  MESSAGE_DELETE,
  MESSAGE_REACTION_ADD,
  MESSAGE_REACTION_REMOVE,
  INTERACTION_CREATE,
  GUILD_BAN_ADD,
  GUILD_BAN_REMOVE,
  GUILD_UPDATE,
  GUILD_DELETE,
  GUILD_MEMBERS_CHUNK,
  CHANNEL_DELETE,
  THREAD_CREATE,
  THREAD_DELETE,
  THREAD_UPDATE,
  THREAD_MEMBER_UPDATE,
  GUILD_ROLE_CREATE,
  GUILD_ROLE_DELETE,
  GUILD_ROLE_UPDATE,
  CHANNEL_PINS_UPDATE,
  GUILD_MEMBER_ADD,
  GUILD_MEMBER_REMOVE,
  GUILD_MEMBER_UPDATE,
} as Record<string, (data: unknown, ws: Gateway) => void>;
