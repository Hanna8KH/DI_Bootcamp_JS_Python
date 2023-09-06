const allTruthy = (...parameters) => {
    for (const parametr of parameters) {
        if (!parametr) return false;
    }
    return true;
}

allTruthy()
