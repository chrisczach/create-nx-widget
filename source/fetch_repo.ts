import degit from 'degit'

const defaultOptions = {
	cache: true,
	force: true,
	verbose: true,
}

export const fetchRepo = (path: string, options = defaultOptions) => {
    const emitter = degit(path, options)
    emitter.on('info', info => {
        console.log(info.message);
    });
    emitter.clone('path/to/dest').then(() => {
        console.log('done');
    });
}
