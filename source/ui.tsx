import React, { FC, useState } from "react";
import { Box, Text } from "ink";
import { Framework, templates, frameworkSelect, brandColor } from "./config";
import { InvalidFrameWork } from "./components/invalid_framework";
import { GenerateFrameWork } from "./components/generate_template";
import SelectInput from "ink-select-input";
import TextInput from "ink-text-input";

const App: FC<{ template?: string; name?: string }> = ({
	template: _template,
	name: _name = "",
}) => {
	const [name, setName] = useState(_name);
	const [selected, setSelected] = useState(false);
	const [template, setTemplate] = useState(_template);
	if (!selected) {
		return (
			<Box>
				<Box marginRight={1}>
					<Text>Enter name for widget project:</Text>
				</Box>

				<TextInput
					value={name}
					onChange={setName}
					onSubmit={(val) => setSelected(!!val)}
				/>
			</Box>
		);
	}

	if (template) {
		if (template in templates) {
			return (
				<GenerateFrameWork
					template={template as Framework}
					projectPath={name}
				></GenerateFrameWork>
			);
		}

		return <InvalidFrameWork template={template}></InvalidFrameWork>;
	}

	return (
		<>
			<Text>
				<Text>
					<Text>Please select base template to use with </Text>
					<Text color={brandColor}>"{name}"</Text> project.
				</Text>
			</Text>
			<SelectInput
				items={frameworkSelect}
				itemComponent={({ label, isSelected }) => (
					<Text color={isSelected ? brandColor : undefined}>{label}</Text>
				)}
				onSelect={(item) => setTemplate(item.value)}
			/>
		</>
	);
};

module.exports = App;
export default App;
