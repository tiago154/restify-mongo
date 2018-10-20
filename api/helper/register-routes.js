const path = require('path');
const filterFiles = require('filter-files');
const isDir = require('is-directory');
const { flatten, pick } = require('lodash');
const isRouteFile = fileName => /((routes)|(route))\.js$/.test(fileName);

/**
 * @method getRoutesFilesFromDirname
 * @param  {String}            dirName
 * @return {Array<String>}
 */
const getRoutesFilesFromDirname = (dirName) => {
    return filterFiles.sync(dirName, (fp, dir) => {
        if (isRouteFile(fp)) { return true };

        return isDir.sync(path.join(dir, fp));
    },
        true
    )
}

/**
 * @method loadRoutesByPath
 * @param  {String}           dirName
 * @return {Array<Function>}   array of routes
 */
const loadRoutesByPath = (dirName) => {
    const routes = getRoutesFilesFromDirname(dirName)
        .map(require);

    return flatten(routes);
}

/**
 * @method registerRoutesByPath
 * @param  {RestifyServer}      server  restify instance
 * @param  {String}             dirName path routes
 */
const registerRoutesByPath = (server, dirName) => {
    const routes = loadRoutesByPath(dirName)

    routes.forEach(route => {
        const { method, handler } = route;
        const opts = pick(route, ['path', 'name', 'version', 'validation']);

        server[method](opts, handler);
    })
}

module.exports = registerRoutesByPath;
