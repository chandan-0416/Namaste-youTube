🚀 Project: YouTube Clone with Optimized Features! 🎉
I've just completed my YouTube Clone project, where I integrated several advanced features using the YouTube API and 
optimized the app for better performance. 

Here are some highlights:
1. Real-Time Live Search: Implemented a responsive, real-time live search with debouncing on each keystroke to enhance
user experience and minimize unnecessary API calls.
2. Live Chat with Auto-Deletion: Added a live chat feature with API polling that automatically deletes chat data, ensuring
the app stays clean and responsive.
3. Reddit-Like Nested Comments: Developed a robust nested comments system, similar to Reddit, allowing for better organization
and interaction within the community.

This project was a fantastic learning experience in app optimization, demonstrating how even small tweaks in API calls can lead
to significant improvements. Every second saved counts!

# Debouncing:
    typing slow= 200ms
    typing fast=30ms

   performance:
        iphone pro max = 14 * 1000 =14000
        with Debouncing= 3 *1000=3000

    Debouncing with 200ms
    -if difference between 2 key strokes is <200ms - Decline API call,
     200ms - make on API call 

#
- API call
- make an api call after every key press 
  but if the difference between 2 api calls is <200ms
  decline the api call

# cache:
   time complexity to search in array =O(n)
   time complexity to search in Object =O(1)
   
   [i, ip, iph, iphone]
   {
       i:
       ip:
       iph:
       iphone:
   
    }

    newMap();