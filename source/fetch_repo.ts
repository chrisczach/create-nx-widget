import degit from 'degit'

const defaultOptions = {
    cache: false,
    force: true,
    verbose: true,
}

export const fetchRepo = (repoPath: string, projectPath: string, options = defaultOptions) => {
    const emitter = degit(repoPath, options)
    emitter.on('info', info => {
        console.log(info.message);
    });
    emitter.clone(projectPath).then(() => {
        console.log('done');
    });
}
