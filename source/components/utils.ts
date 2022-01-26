import { baseGhRepo, Framework, templates } from "../config";

export const getTemplatePath = (template: Framework): [string, string] => [templates[template], `${baseGhRepo}/nx-widget-${template}`]
