export const baseGhRepo = 'chrisczach'
export const brandColor = '#2FA2DB'

export enum Framework {
    vue = 'vue',
    vanilla = 'vanilla',
    react = 'react',
    svelte = 'svelte',
    lit = 'lit'
}
export const templates: Record<Framework, string> = {
    vue: 'Vue',
    vanilla: 'Vanilla JavaScript',
    react: 'React',
    svelte: 'Svelte',
    lit: 'Lit Elements'
}

export const availableTemplates = Object.keys(templates).join(' | ')
export const frameworkSelect = Object.entries(templates).map(([value, label]) => ({ value, label }))
