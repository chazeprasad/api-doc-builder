var buildDir =  './dist'

export default {
    sourceDir: './src/',
    buildDir: buildDir,
    doc: {
        src: ['src/api/**/*', 'src/api-doc.yaml'],
        dest: buildDir + '/api-docs/api'
    },
    swagger: {
        src: ['src/swagger-ui/**/*'],
        dest: buildDir + '/api-docs'
    },
    init: function () {
        return this;
    },
    app: {
        dest: './dist/api-docs'
    },
    browserPort: 4040,
    UIPort: 4041
}.init();
