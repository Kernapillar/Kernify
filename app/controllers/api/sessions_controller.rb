class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if !@user
            render json: ['Invalid  credentials'], status: 401
        else
            login!(@user)
            render "api/users/show"
        end  
    end

    def destroy
        if !current_user
            render json: ['No current user'], status: 404
        end
        logout!
        render json: {}
    end
end
