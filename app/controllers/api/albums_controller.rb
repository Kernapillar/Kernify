class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render :index
    end

    def show
        @album = Album.find_by(params[:id])
        render :show
    end

end
