function normalizePath(path: string): string {
    if (!path.startsWith('/')) {
        path = `/${path}`;
    }
    if (path.endsWith('/')) {
        path = path.slice(0, -1);
    }
    return path;
}

export { normalizePath };
