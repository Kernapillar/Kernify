json.album do 
    json.set! @album.id do
        json.extract! @album, :id, :name, :year, :artist_id 
        if @album.picture_url.attached? 
            json.pictureUrl url_for(@album.picture_url)
        end        
        json.artist @album.artist.name
    end
end

json.tracks do 
    @album.tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :name, :audio_url, :duration, :artist_id, :album_id 
            if track.audio_url.attached? 
                json.audioUrl url_for(track.audio_url)
            end  
            json.artist track.artist.name
        end
    end
end
