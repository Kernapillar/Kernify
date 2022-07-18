class Api::HomeController < ApplicationController

    def index
        @all = [Artist.all, Album.all, Playlist.all]
        render :index
    end
end
