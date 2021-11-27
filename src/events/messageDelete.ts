// deno-lint-ignore-file no-explicit-any

import { Bot, DiscordenoMessage, getUser, sendMessage } from "../deps.ts";

import { config } from "../config.ts";

export async function messageDelete(bot: Bot, payload: any, message: (DiscordenoMessage | undefined)) {
	console.log("jo")
	if (!message) return;
	console.log("jo")

	const user = await getUser(bot, message.authorId);

	// logs for delete messages
	sendMessage(bot, config.logChannel, {
		embeds: [
			{
				color: 0xff2134,
				title: "Message Deleted",
				description: `**"** ${message.content} **"**`,
				author: {
					name: user.username,
					iconUrl: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?size=64`,
				},
				footer: { text: `deleted in ${payload.channel.name}` },
			},
		],
	});
}
