
json.artist do 
    json.set! @artist.id do
        json.extract! @artist, :id, :name, :bio
        # if @artist.picture_url.attached? 
        #     json.pictureUrl url_for(@artist.picture_url)
        # end
    end
end

json.albums do 
    @artist.albums.each do |album|
        json.set! album.id do 
            json.extract! album, :id, :name, :artist_id
            if album.picture_url.attached? 
                json.pictureUrl url_for(album.picture_url)
            end
        end
    end
end

json.tracks do 
    @artist.preview_tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :name, :duration, :album_id, :artist_id
            if track.audio_url.attached? 
                json.audioUrl url_for(track.audio_url)
            end
        end
    end
end