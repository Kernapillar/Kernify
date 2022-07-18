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






# user Seed
demo_user = User.create(username: "Demo", password: "123456")

# artist seeds
artist1 = Artist.create(name: "Red Hot Chili Peppers", bio: "theyre red hot")

artist2 = Artist.create(name: "Portugal. The Man", bio: "is it a place, a person or a band?")

artist3 = Artist.create(name: "Tycho", bio: "words cannot describe...")

artist4 = Artist.create(name: "Phoenix", bio: "cool and French I think?")



# album seeds

album1 = Album.create(name: "Californiaction", year: 1999, artist_id: 1)
    file1 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/rhcp_logo.jpeg')
    album1.picture_url.attach(io: file1, filename: 'rhcp_logo.jpeg')

album2 = Album.create(name: "Stadium Arcadium", year: 2006, artist_id: 1)
    # file2 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/rhcp_logo.jpeg')
    # album2.picture_url.attach(io: file2, filename: 'rhcp_logo.jpeg')
    
album3 = Album.create(name: "In the Mountain in the Cloud", year: 2011, artist_id: 2)
    # file3 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/rhcp_logo.jpeg')
    # album3.picture_url.attach(io: file3, filename: 'rhcp_logo.jpeg')
album4 = Album.create(name: "The Satanic Satanist", year: 2009, artist_id: 2)
    # file4 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/rhcp_logo.jpeg')
    # album4.picture_url.attach(io: file4, filename: 'rhcp_logo.jpeg')

album5 = Album.create(name: "Dive", year: 2011, artist_id: 3)
    # file5 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/rhcp_logo.jpeg')
    # album5.picture_url.attach(io: file5, filename: 'rhcp_logo.jpeg')

album6 = Album.create(name: "Wolfgang Amadeus Phoenix", year: 2009, artist_id: 4)
    # file6 = URI.open('https://kernify-seed.s3.us-west-1.amazonaws.com/rhcp_logo.jpeg')
    # album6.picture_url.attach(io: file6, filename: 'rhcp_logo.jpeg')



# track seeds

    # Red Hot Chili Peppers
track1 = Track.create(name: "Scar Tissue", duration: "1:00", album_id: 1, artist_id: 1)
track2 = Track.create(name: "Otherside", duration: "1:00", album_id: 1, artist_id: 1)
track3 = Track.create(name: "Californiacation", duration: "1:00", album_id: 1, artist_id: 1)
track4 = Track.create(name: "Easily", duration: "1:00", album_id: 1, artist_id: 1)

track5 = Track.create(name: "Dani California", duration: "1:00", album_id: 2, artist_id: 1)
track6 = Track.create(name: "Snow (Hey Oh)", duration: "1:00", album_id: 2, artist_id: 1)
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
track24 = Track.create(name: "1901", duration: "1:00", album_id: 6, artist_id: 4)
track25 = Track.create(name: "Lasso", duration: "1:00", album_id: 6, artist_id: 4)
track26 = Track.create(name: "Rome", duration: "1:00", album_id: 6, artist_id: 4)
track27 = Track.create(name: "Countdown", duration: "1:00", album_id: 6, artist_id: 4)
track28 = Track.create(name: "Girlfriend", duration: "1:00", album_id: 6, artist_id: 4)
track29 = Track.create(name: "Armistice", duration: "1:00", album_id: 6, artist_id: 4)


# Playlist Seeds

playlist1 = Playlist.create(name: "testPlaylist1", description: "idk lets see if it works", user_id: 1)
playlist2 = Playlist.create(name: "Yellow Mild Banana Peppers", description: "not super loud peppers", user_id: 1)
playlist3 = Playlist.create(name: "instrumental", description: "its got no words", user_id: 1)

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