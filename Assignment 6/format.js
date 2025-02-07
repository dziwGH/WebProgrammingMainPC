function formatNames(arr) {
    return arr
        .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
        .join(', ');
}

console.log(formatNames(["andrew", "bLaKe", "denNIS"]))