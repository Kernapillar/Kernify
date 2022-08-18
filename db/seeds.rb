# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
ActiveRecord:: Base.connection.reset_pk_sequence!('users')
Artist.destroy_all
ActiveRecord:: Base.connection.reset_pk_sequence!('artists')
User.destroy_all
ActiveRecord:: Base.connection.reset_pk_sequence!('users')
Album.destroy_all
ActiveRecord:: Base.connection.reset_pk_sequence!('albums')
Track.destroy_all
ActiveRecord:: Base.connection.reset_pk_sequence!('tracks')
Playlist.destroy_all
ActiveRecord:: Base.connection.reset_pk_sequence!('playlists')
PlaylistItem.destroy_all
ActiveRecord:: Base.connection.reset_pk_sequence!('playlist_items')






# user Seed
demo_user = User.create(username: "Demo_User", password: "123456")
admin_user = User.create(username: "AlexKern", password: "123456")

# artist seeds
artist1 = Artist.create(name: "Red Hot Chili Peppers", bio: "theyre red hot")
    artistfile1 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/rhcp_logo.jpg')
    artist1.picture_url.attach(io: artistfile1, filename: 'rhcp_logo.jpg')

artist2 = Artist.create(name: "Portugal. The Man", bio: "is it a place, a person or a band?")
    artistfile2 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/ptm_logo.jpeg')
    artist2.picture_url.attach(io: artistfile2, filename: 'ptm_logo.jpeg')

artist3 = Artist.create(name: "Tycho", bio: "words cannot describe...")
    artistfile3 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/tycho_logo.png')
    artist3.picture_url.attach(io: artistfile3, filename: 'tycho_logo.png')

artist4 = Artist.create(name: "Phoenix", bio: "cool and French I think?")
    artistfile4 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/phoenix_logo.jpeg')
    artist4.picture_url.attach(io: artistfile4, filename: 'phoenix_logo.jpeg')

artist5 = Artist.create(name: "Pink Floyd", bio: "My dad liked them and now I do too")
    artistfile5 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/Pink_Floyd_Logo.jpeg')
    artist5.picture_url.attach(io: artistfile5, filename: 'Pink_Floyd_Logo.jpeg')

# album seeds

album1 = Album.create(name: "Californiaction", year: 1999, artist_id: artist1.id)
    file1 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/californiacation.jpg')
    album1.picture_url.attach(io: file1, filename: 'californiacation.jpg')

album2 = Album.create(name: "Stadium Arcadium", year: 2006, artist_id: 1)
    file2 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/Stadiumarcadium.jpg')
    album2.picture_url.attach(io: file2, filename: 'Stadiumarcadium.jpg')
    
album3 = Album.create(name: "In the Mountain in the Cloud", year: 2011, artist_id: 2)
    file3 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/In_the_Mountain_in_the_Cloud.jpg')
    album3.picture_url.attach(io: file3, filename: 'In_the_Mountain_in_the_Cloud.jpg')

album4 = Album.create(name: "The Satanic Satanist", year: 2009, artist_id: 2)
    file4 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/PortugalTheMan.jpg')
    album4.picture_url.attach(io: file4, filename: 'PortugalTheMan.jpg')

album5 = Album.create(name: "Dive", year: 2011, artist_id: 3)
    file5 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/Dive_tycho_album.jpg')
    album5.picture_url.attach(io: file5, filename: 'Dive_tycho_album.jpg')

album6 = Album.create(name: "Wolfgang Amadeus Phoenix", year: 2009, artist_id: 4)
    file6 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/Wolfgang_Amadeus_Phoenix.png')
    album6.picture_url.attach(io: file6, filename: 'Wolfgang_Amadeus_Phoenix.png')

album7 = Album.create(name: "Wish You Were Here", year: 1975, artist_id: 5)
    file7 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/wish_you_were_here.jpg')
    album7.picture_url.attach(io: file7, filename: 'wish_you_were_here.jpg')


# track seeds

    # Red Hot Chili Peppers
track1 = Track.create(name: "Scar Tissue", duration: "1:00", album_id: album1.id, artist_id: artist1.id)
    audio_file1 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/Final_Recording_AK.mp3')
    track1.audio_url.attach(io: audio_file1, filename: 'Final_Recording_AK.mp3')

track2 = Track.create(name: "Otherside", duration: "1:00", album_id: 1, artist_id: 1)
    # audio_file2 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/RedHotChiliPeppers-Otherside[OfficialMusicVideo].mp3')
    # track2.audio_url.attach(io: audio_file2, filename: 'RedHotChiliPeppers-Otherside[OfficialMusicVideo].mp3')

track3 = Track.create(name: "Californiacation", duration: "1:00", album_id: 1, artist_id: 1)
    audio_file3 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/RHCPCaliforniacation.mp3')
    track3.audio_url.attach(io: audio_file3, filename: 'RHCPCaliforniacation.mp3')

track4 = Track.create(name: "Easily", duration: "1:00", album_id: 1, artist_id: 1)

track5 = Track.create(name: "Dani California", duration: "1:00", album_id: 2, artist_id: 1)
track6 = Track.create(name: "Snow (Hey Oh)", duration: "1:00", album_id: 2, artist_id: 1)
    audio_file6 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/RHCPSnow.mp3')
    track6.audio_url.attach(io: audio_file6, filename: 'RHCPSnow.mp3')

track7 = Track.create(name: "Charlie", duration: "1:00", album_id: 2, artist_id: 1)
track8 = Track.create(name: "Wet Sand", duration: "1:00", album_id: 2, artist_id: 1)
track9 = Track.create(name: "Hey", duration: "1:00", album_id: 2, artist_id: 1)

    # Portugal. The Man
track10 = Track.create(name: "So American", duration: "1:00", album_id: 3, artist_id: 2)
track11 = Track.create(name: "Got It All (This Can't Be Living Now)", duration: "1:00", album_id: 3, artist_id: 2)
track12 = Track.create(name: "All Your Light (Times Like These)", duration: "1:00", album_id: 3, artist_id: 2)
track13 = Track.create(name: "Share With  Me the Sun", duration: "1:00", album_id: 3, artist_id: 2)
track14 = Track.create(name: "Sleep Forever", duration: "1:00", album_id: 3, artist_id: 2)

track15 = Track.create(name: "People Say", duration: "1:00", album_id: 4, artist_id: 2)
track16 = Track.create(name: "The Sun", duration: "1:00", album_id: 4, artist_id: 2)
track17 = Track.create(name: "Do You", duration: "1:00", album_id: 4, artist_id: 2)
track18 = Track.create(name: "Let You Down", duration: "1:00", album_id: 4, artist_id: 2)
track19 = Track.create(name: "Mornings", duration: "1:00", album_id: 4, artist_id: 2)

    # Tycho
track20 = Track.create(name: "A Walk", duration: "1:00", album_id: 5, artist_id: 3)
track21 = Track.create(name: "Dive", duration: "1:00", album_id: 5, artist_id: 3)
track22 = Track.create(name: "Adrift", duration: "1:00", album_id: 5, artist_id: 3)

    # Phoenix
track23 = Track.create(name: "Lisztomania", duration: "1:00", album_id: 6, artist_id: 4)
    audio_file23 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/PhoenixLisztomania.mp3')
    track23.audio_url.attach(io: audio_file23, filename: 'PhoenixLisztomania.mp3')

track24 = Track.create(name: "1901", duration: "1:00", album_id: 6, artist_id: 4)
    audio_file24 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/Phoenix1901.mp3')
    track24.audio_url.attach(io: audio_file24, filename: 'Phoenix1901.mp3')

track25 = Track.create(name: "Lasso", duration: "1:00", album_id: 6, artist_id: 4)
track26 = Track.create(name: "Rome", duration: "1:00", album_id: 6, artist_id: 4)
track27 = Track.create(name: "Countdown", duration: "1:00", album_id: 6, artist_id: 4)
track28 = Track.create(name: "Girlfriend", duration: "1:00", album_id: 6, artist_id: 4)
track29 = Track.create(name: "Armistice", duration: "1:00", album_id: 6, artist_id: 4)
    audio_file29 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/PhoenixArmistice.mp3')
    track29.audio_url.attach(io: audio_file29, filename: 'PhoenixArmistice.mp3')


    # Pink Floyd

track30 = Track.create(name: "Shine On You Crazy Diamond (Parts I - V)", duration: "1:00", album_id: 7, artist_id: 5)
    audio_file30 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/PFShineOnYouCrazyDiamond1.m4a')
    track30.audio_url.attach(io: audio_file30, filename: 'PFShineOnYouCrazyDiamond1.m4a')

track31 = Track.create(name: "Welcome to the Machine", duration: "1:00", album_id: 7, artist_id: 5)
    audio_file31 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/PFWelcometotheMachine.m4a')
    track31.audio_url.attach(io: audio_file31, filename: 'PFWelcometotheMachine.m4a')

track32 = Track.create(name: "Have a Cigar", duration: "1:00", album_id: 7, artist_id: 5)
    audio_file32 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/PFHaveACigar.m4a')
    track32.audio_url.attach(io: audio_file32, filename: 'PFHaveACigar.m4a')

track33 = Track.create(name: "Wish You Were Here", duration: "1:00", album_id: 7, artist_id: 5)
    audio_file33 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/PFWishYouWereHere.m4a')
    track33.audio_url.attach(io: audio_file33, filename: 'PFWishYouWereHere.m4a')

track34 = Track.create(name: "Shine On You Crazy Diamond (Parts VI - IX)", duration: "1:00", album_id: 7, artist_id: 5)
    audio_file34 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/PFShineOnYouCrazyDiamond2.m4a')
    track34.audio_url.attach(io: audio_file34, filename: 'PFShineOnYouCrazyDiamond2.m4a')






# Playlist Seeds

playlist1 = Playlist.create(name: "testPlaylist1", description: "idk lets see if it works", color_1: "red", color_2: "blue" ,user_id: 1)
    
playlist2 = Playlist.create(name: "Yellow Mild Banana Peppers", description: "not super loud peppers", color_1: "green", color_2: "yellow" ,user_id: 1)
    
playlist3 = Playlist.create(name: "instrumental", description: "its got no words", color_1: "purple", color_2: "orange" ,user_id: 1)
 
playlist4 = Playlist.create(name: "The Ones With Sound", description: "I hope ", color_1: "black", color_2: "blue" ,user_id: admin_user.id)
   

# Playlist Item Seeds

    # playlist 1
PlaylistItem1 = PlaylistItem.create(playlist_id: 1, track_id: 1)
PlaylistItem2 = PlaylistItem.create(playlist_id: 1, track_id: 5)
PlaylistItem3 = PlaylistItem.create(playlist_id: 1, track_id: 10)
PlaylistItem4 = PlaylistItem.create(playlist_id: 1, track_id: 15)
PlaylistItem5 = PlaylistItem.create(playlist_id: 1, track_id: 20)

    # playlist 2
PlaylistItem6 = PlaylistItem.create(playlist_id: 2, track_id: 1)
PlaylistItem7 = PlaylistItem.create(playlist_id: 2, track_id: 3)
PlaylistItem8 = PlaylistItem.create(playlist_id: 2, track_id: 5)
PlaylistItem9 = PlaylistItem.create(playlist_id: 2, track_id: 7)
PlaylistItem10 = PlaylistItem.create(playlist_id: 2, track_id: 8)

    # playlist 3
PlaylistItem11 = PlaylistItem.create(playlist_id: 3, track_id: 1)
PlaylistItem12 = PlaylistItem.create(playlist_id: 3, track_id: 5)
PlaylistItem13 = PlaylistItem.create(playlist_id: 3, track_id: 10)
PlaylistItem14 = PlaylistItem.create(playlist_id: 3, track_id: 15)
PlaylistItem15 = PlaylistItem.create(playlist_id: 3, track_id: 20)

    # playlist 4
# PlaylistItem16 = PlaylistItem.create(playlist_id: playlist4.id, track_id: track1.id)
PlaylistItem16 = PlaylistItem.create(playlist_id: 4, track_id: 1)
PlaylistItem17 = PlaylistItem.create(playlist_id: 4, track_id: 3)
PlaylistItem18 = PlaylistItem.create(playlist_id: 4, track_id: 6)
PlaylistItem19 = PlaylistItem.create(playlist_id: 4, track_id: 23)
PlaylistItem20 = PlaylistItem.create(playlist_id: 4, track_id: 24)
PlaylistItem21 = PlaylistItem.create(playlist_id: 4, track_id: 29)
PlaylistItem22 = PlaylistItem.create(playlist_id: 4, track_id: 30)
PlaylistItem23 = PlaylistItem.create(playlist_id: 4, track_id: 31)
PlaylistItem24 = PlaylistItem.create(playlist_id: 4, track_id: 32)
PlaylistItem25 = PlaylistItem.create(playlist_id: 4, track_id: 33)
PlaylistItem26 = PlaylistItem.create(playlist_id: 4, track_id: 34)