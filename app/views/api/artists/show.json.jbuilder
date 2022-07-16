json.artist do 
    json.set! @artist.id do
        json.extract! @artist, :id, :name, :bio, :picture_url
    end
end

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do 
            json.extract! album, :id, :name, :picture_url, :artist_id
        end
    end
end

json.tracks do 
    @artist.preview_tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :name, :audio_url, :duration, :album_id, :artist_id
        end
    end
end