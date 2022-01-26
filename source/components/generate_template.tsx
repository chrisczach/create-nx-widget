import React, { FC } from "react";
import { Text } from "ink";
import { brandColor, Framework } from "../config";
import { getTemplatePath as getTemplate } from "./utils";
import { fetchRepo } from "../fetch_repo";

export const GenerateFrameWork: FC<{ template: Framework }> = ({
	template,
}) => {
	const [templateName, templatePath] = getTemplate(template);
	fetchRepo(templatePath)

	return (
		<>
			<Text>
				<Text color="green">Generating Template: </Text>
				<Text>Fetching </Text>
				<Text color={brandColor}>{templateName}</Text>
				<Text> template from Github repo </Text>
				<Text color={brandColor}>{templatePath}</Text>
			</Text>
		</>
	);
};
