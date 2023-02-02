export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deletHeroes = (id) => {
    return {
        type: "HEROES_DELETE",
        id,
    }

}

export const createHeroes = (data) => {
    return {
        type: "HEROES_CREATE",
        data,
    }

}