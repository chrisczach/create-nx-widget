import degit from 'degit'

const defaultOptions = {
    cache: false,
    force: true,
    verbose: true,
}

export const fetchRepo = async(repoPath: string, projectPath: string, options = defaultOptions) => {
    const emitter = degit(repoPath, options)
    emitter.on('info', info => {
        console.log(info.message);
    });
    return emitter.clone(projectPath)
}
