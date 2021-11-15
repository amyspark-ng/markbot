import {editBotStatus, DiscordActivityTypes} from "../deps.ts";

export function ready() {
	console.log("ka-boom");

	editBotStatus({
		since: null,
		activities: [
			{
				name: "DenoMark",
				type: DiscordActivityTypes.Watching,
				createdAt: 0,
			},
		],
		status: "idle",
		afk: false,
	});
}
