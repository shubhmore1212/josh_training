/*
Go to youtube. Open any video. Add a button to the page using JS. 
On click of the button, the video playback speed should change to 10x
*/

function myFunction() {
  document.getElementsByTagName("video")[0].playbackRate = 3;
}

/*
1.Cntrl + Shift + I

2.First write 'myFunction' in the console and run. 
This will make the scope of myFunction global now we can easily access it.

3.Create button in HTML and give the myFunction functionality to the onClick 
event of button.

//HTML Code

<button onClick="myFunction()">Speed Up</button>


*/
