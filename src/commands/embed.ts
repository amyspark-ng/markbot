// construct a embed with mark bot
import { MarkCommand } from "../types/command.ts";

const cmd: MarkCommand = {
	name: "embed",
	description: "send a embed msg",
	options: [
		{
			name: "title",
			description: "Title of the embed",
			type: "STRING",
			required: false,
		},
		{
			name: "description",
			description: "Description of the embed",
			type: "STRING",
			required: false,
		},
		{
			name: "image",
			description: "Image of the embed",
			type: "STRING",
			required: false,
		},
		{
			name: "thumbnail",
			description: "Thumbnail of the embed",
			type: "STRING",
			required: false,
		},
		{
			name: "footer",
			description: "Footer text of the embed",
			type: "STRING",
			required: false,
		},
		{
			name: "author",
			description: "Author text of the embed",
			type: "STRING",
			required: false,
		},
		{
			name: "channel",
			description: "Channel to send the embed to",
			type: "CHANNEL",
			channelTypes: ["GUILD_TEXT"],
			required: false,
		},
	],
	defaultPermission: false,
	exe: async (interaction) => {
		interaction.reply("embed created and sented");

		const channel = (await interaction.guild?.channels.get(interaction.options?.find((c) => c.name === "channel")?.value)) || interaction.channel;

		if (!channel?.isText()) return;

		channel.send({
			embeds: [{
				color: 0xffe359,
				title: interaction.options?.find((c) => c.name === "title")?.value || "",
				description: interaction.options?.find((c) => c.name === "description")?.value.replaceAll("\\n", `\n`) || "",
				image: { url: interaction.options?.find((c) => c.name === "image")?.value || "" },
				thumbnail: { url: interaction.options?.find((c) => c.name === "thumbnail")?.value || "" },
				footer: { text: interaction.options?.find((c) => c.name === "footer")?.value || "" },
			}],
		});
	},
};

export default cmd;
