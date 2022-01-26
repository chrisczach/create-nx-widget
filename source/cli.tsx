#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";
import { availableTemplates } from "./config";

const cli = meow(
	`
	Usage
	  $ create-nx-widget

	Options
		--template  ${availableTemplates}

	Examples
	  $ create-nx-widget --template=vue
	  Generating Nx Witness Cloud dashboard using Vue
`,
	{
		flags: {
			template: {
				type: "string",
			},
			name: {
				type: "string",
			},
		},
	}
);

render(<App {...cli.flags}/>);
