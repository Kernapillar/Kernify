json.playlist do
    json.set! @playlist.id do 
        json.extract! @playlist, :id, :name, :description, :picture_url, :user_id
        json.user @playlist.user.username
    end
end

json.tracks do 
    @playlist.tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :name, :audio_url, :duration, :artist_id, :album_id
            json.artist track.artist.name
            json.album track.album.name
        end
    end
end

