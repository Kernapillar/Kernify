@tracks.each do |track|
    json.set! track.id do 
        json.extract! track, :id, :name, :audio_url, :duration, :album_id, :artist_id

    end
end