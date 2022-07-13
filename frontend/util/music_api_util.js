export const fetchAllArtists = () => {
    return $.ajax({
        url: `api/artists`, 
        method: "GET"
    })
}

export const fetchArtist = (artistId) => {
    return $.ajax({
        url: `api/artists/${artistId}`, 
        method: "GET"
    })
}

export const fetchAllAlbums = () => {
    return $.ajax({
        url: `api/albums`, 
        method: "GET"
    })
}

export const fetchAlbum = (albumId) => {
    return $.ajax({
        url: `api/albums/${albumId}`, 
        method: "GET",
        
    })
}

export const fetchAllTracks = () => {
    return $.ajax({
        url: `api/tracks`, 
        method: "GET"
    })
}

