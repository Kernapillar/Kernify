json.album do 
    json.set! @album.id do
        json.extract! @album, :id, :name, :year, :picture_url, :artist_id
        json.artist @album.artist.name
    end
end

json.tracks do 
    @album.tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :name, :audio_url, :duration, :artist_id
            json.artist track.artist.name
        end
    end
end
