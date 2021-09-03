import { InteractionCallbackFlags } from '../const/discord/interaction';
import { Snowflake } from '../const/Snowflake';
import IInteraction, { IInteractionCallbackData } from '../intf/IInteraction';
import Client from './client';

export default class interaction {
	type: IInteraction['type'];
	id: IInteraction['id'];
	private token: IInteraction['token'];
	channelId: IInteraction['channel_id'];
	guildId: IInteraction['guild_id'];
	member: IInteraction['member'];
	user: IInteraction['user'];
	applicationId: IInteraction['application_id'];
	readonly bot: Client;
	constructor(bot: Client, interaction: IInteraction) {
		this.type = interaction.type;
		this.id = interaction.id;
		this.token = interaction.token;
		this.guildId = interaction.guild_id && new Snowflake(interaction.guild_id);
		this.channelId = interaction.channel_id;
		this.member = interaction.member;
		this.user = interaction.user;
		this.applicationId = interaction.application_id;
		this.bot = bot;
	}

	reply(content: IInteractionCallbackData) {
		const reply: IInteractionCallbackData & { flags: InteractionCallbackFlags } = content as any;
		if (content.ephemeral) reply.flags = InteractionCallbackFlags.EPHEMERAL;
		this.bot.HTTP.post(`/interactions/${this.id}/${this.token}/callback`, JSON.stringify({ type: 4, data: reply }));
	}

	get guild() {
		if (!this.guildId) return undefined;
		return this.bot.getGuildByID(this.guildId);
	}
}