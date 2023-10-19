# Custom-Audio-Player
Sorry for the language but it's 1 am right now and I spent around 4 hours finding, writing and customising this piece of shit code. It shouldn't have taken this long and this option should have been a part of the audio element itself. WHY IS IT NOT? 

USE CASE:
I wanted to put an audio file on the UI with only one requirement; There is a specific part of the audio which is important so I wanted to highlight it in the audio bar/timeline itself. The first and foremost and probably biggest effing problem with the AudioElement is that its UI is different across different browsers. WHHHYYYYY? IDK. 2nd, It cant be customized to what I want. WHHYY ?? IDK. Reddit said so and I trust Reddit, it got me through an interview. 
NEXTT... A simple solution (jugaarr) is to put another div on top of the audio element where you want the highlighted part. You would think it would look nice but trust me, it looked shit.... 

Eventually after a lot of tries and fails and customizations I was able to finally write the code to do what I wanted.
works fucking beautifully. set the start and end time of the highlighted part in the js file. you can adjust the colour of the seeker and highlighted part in CSS file (duh, obviously dude) 

And I am putting it here on GitHub in public so ppl don't have to spend this much time on this stupid basic thing.




Credits:
Google,
ChatGPT,
Reddit,
Random music from https://521dimensions.com/open-source/amplitudejs
