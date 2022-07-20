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
    playlistItem = @playlist.playlist_items.includes(:track)
    playlistItem.each do |item|
        json.set! item.track.id do 
            json.extract! item.track, :id, :name, :duration, :artist_id, :album_id
            if item.track.audio_url.attached? 
                json.audioUrl url_for(item.track.audio_url)
            end
            json.playlistItem item
            json.artist item.track.artist.name
            json.album item.track.album.name
        end
    end
end