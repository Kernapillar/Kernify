json.playlist do
    json.set! @playlist.id do 
        json.extract! @playlist, :id, :name, :description, :user_id
        if @playlist.picture_url.attached? 
            json.pictureUrl url_for(@playlist.picture_url)
        end
        json.user @playlist.user.username
    end
end

json.tracks do 
    @playlist.tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :name, :duration, :artist_id, :album_id
            if track.audio_url.attached? 
                json.audioUrl url_for(track.audio_url)
            end
            json.artist track.artist.name
            json.album track.album.name
        end
    end
end

