# 4 Kernify - Alex Kern 

## Background 
Kernify is a clone of the popular audio streaming website Spotify. It features pages for artists, albums and playlists, allows users to create accounts and log in, as well as create and edit their own playlists (full CRUD functionality). Tracks can be added to a user's playlists, and users can search for artists, tracks, albums and playlists by name. 

Live Site: https://kernify.herokuapp.com/

## Code Sippets: 

<img width="371" alt="image" src="https://user-images.githubusercontent.com/103587019/185509858-4d2977b9-add3-4bb7-abd1-a2621ec678fc.png">
This function within the Audio Player component allows a user to click on the speaker icon next to the volume slider to quickly mute the audio. The component will save the previous volume level, and will jump back to the previous volume level when pressed again. 


<img width="623" alt="image" src="https://user-images.githubusercontent.com/103587019/185510169-827630fd-dadf-4b45-b0f2-2e8e8664e06f.png">
This section of the ./playlists/show.json.jbuilder file iterates through a playlist's playlist items (a joins table containing unique combinations of track and playlist ids) and sends them to the frontend as tracks. The includes(:track) portoin of the code prevents un-necessary database queries by grabbing all necessary information about the track allong with the playlist_item. 

<img width="623" alt="image" src="https://user-images.githubusercontent.com/103587019/185510866-d3368389-501c-4481-8d95-7b40e12154b4.png">

This CardIndex component allows different types of Card items to be rendered based on the card type prop passed in, allowing albums, artists and playlists to have their own seperate styling and functionality, without requiring dedicated components with repeated code. The className at the top allows a card index to be set as a "preview" which means that it will only render enough cards to not spill over to a new grid row, as opposed to the index that will render a grid with all cards of its type. 


## To Do:

As a bonus feature I will be implementing Likes for tracks as well as a Follows for artists. These would allow a user to like their favorite tracks to have them show up in a "liked songs" playlist, as well as save favorite artist pages to a "followed" tab. 
I would also like to seed more artists, albums and tracks. 