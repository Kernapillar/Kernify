json.album do 
    json.set! @album.id do
        json.extract! @album, :id, :title, :year, :picture_url, :artist_id
    end
end

json.tracks do 
    @album.tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :name, :audio_url, :duration
        end
    end
end

json.artist do
    json.set! @album.artist.id do
        json.extract! @album.artist, :id, :name
    end
end