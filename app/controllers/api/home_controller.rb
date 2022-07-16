class Api::HomeController < ApplicationController

    def index
        @all = [Artist.all, Album.all]
        render :index
    end
end
