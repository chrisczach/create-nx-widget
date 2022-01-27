import React, { FC, useState } from "react";
import { Newline, Text } from "ink";
import { brandColor, Framework } from "../config";
import { getTemplatePath as getTemplate } from "./utils";
import { fetchRepo } from "../fetch_repo";

export const GenerateFrameWork: FC<{
	template: Framework;
	projectPath: string;
}> = ({ template, projectPath }) => {
	const [templateName, templatePath] = getTemplate(template);
	const [finished, setFinished] = useState(false);

	fetchRepo(templatePath, projectPath).then(() => setFinished(true));

	if (finished) {
		return (
			<Text>
				<Newline />
				<Text>
					Project successfully initialized from{" "}
					<Text color={brandColor}>{templateName}</Text> template.
				</Text>
				<Newline />
				<Text color="green">Getting Started</Text>
				<Newline />
				<Text>
					Open <Text color={brandColor}>{templateName}</Text> Project:
					<Text color="green"> cd {projectPath}</Text>
				</Text>
				<Newline />
				<Text>
					Install Dependencies: <Text color="green">npm install</Text>
				</Text>
				<Newline />
				<Text>
					Start Dev Server: <Text color="green">npm run dev</Text>
				</Text>
				<Newline />
			</Text>
		);
	}

	return (
		<>
			<Text>
				<Newline />
				<Text color="green">Generating Template: </Text>
				<Newline />
				<Text>Fetching </Text>
				<Text color={brandColor}>{templateName}</Text>
				<Text> template from Github repo </Text>
				<Text color={brandColor}>{templatePath}</Text>
				<Newline />
			</Text>
		</>
	);
};
