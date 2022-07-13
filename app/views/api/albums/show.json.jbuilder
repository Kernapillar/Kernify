json.album do 
    json.extract! @album, :id, :title, :year, :picture_url, :artist_id
end

json.tracks do 
    @album.tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :name, :audio_url, :duration
        end
    end
end

json.artist @album.artist