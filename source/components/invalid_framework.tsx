import React, { FC } from "react";
import { Text } from "ink";
import { availableTemplates, brandColor } from "../config";

export const InvalidFrameWork: FC<{ template?: string }> = ({ template }) => (
	<Text>
		<Text color={brandColor}>{template}</Text> is not a valid template. Please
		choose from <Text color={brandColor}>{availableTemplates}</Text>
	</Text>
);
