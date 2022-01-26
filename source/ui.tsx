import React, { FC, useState } from "react";
import { Text } from "ink";
import { Framework, templates, frameworkSelect } from "./config";
import { InvalidFrameWork } from "./components/invalid_framework";
import { GenerateFrameWork } from "./components/generate_template";
import SelectInput from "ink-select-input";

const App: FC<{ template?: string }> = ({ template }) => {
	const [useTemplate, setTemplate] = useState(template);
	if (useTemplate) {
		if (useTemplate in templates) {
			return (
				<GenerateFrameWork
					template={useTemplate as Framework}
				></GenerateFrameWork>
			);
		}

		return <InvalidFrameWork template={useTemplate}></InvalidFrameWork>;
	}

	return (
		<>
			<Text>
				<Text color="green">
					Please select a template to generate base Nx Witness Cloud dashboard
					widget
				</Text>
			</Text>
			<SelectInput
				items={frameworkSelect}
				onSelect={(item) => setTemplate(item.value)}
			/>
		</>
	);
};

module.exports = App;
export default App;
