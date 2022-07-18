@tracks.each do |track|
    json.set! track.id do 
        json.extract! track, :id, :name, :duration, :album_id, :artist_id
        if track.audio_url.attached? 
            json.audioUrl url_for(track.audio_url)
        end

    end
end