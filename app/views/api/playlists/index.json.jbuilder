@playlists.each do |playlist|
    json.set! playlist.id do 
        json.extract! playlist, :id, :name, :description, :user_id
        if playlist.picture_url.attached? 
            json.pictureUrl url_for(playlist.picture_url)
        end
        json.user playlist.user.username
    end

end