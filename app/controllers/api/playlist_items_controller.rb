class Api::PlaylistItemsController < ApplicationController

    def create
        @playlist_item = PlaylistItem.new(playlist_item_params)
        if @playlist_item.save
            render json: ["track added to playlist"], status: 200
        else
            render json:["track is already in playlist"], status: 403
        end
    end


    def destroy
        @playlist_item = PlaylistItem.find_by(id: params[:id])
        @playlist = Playlist.find_by(id: @playlist_item.playlist_id)
        render "api/playlists/show" if @playlist_item.destroy
    end

    private

    def playlist_item_params
        params.require(:playlist_item).permit(:playlist_id, :track_id)
    end 
end
