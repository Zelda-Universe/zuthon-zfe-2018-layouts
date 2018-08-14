# ZUthon ZFE 2018 Layouts

## Getting Started
To get started, clone or download & unzip this repo onto your computer in a place that OBS Studio can access local HTML files. To download the files, look in the top right corner of this screen to do so.

## OBS Studio Setup
### Prerequisites
* This guide assumes that you know how to add, position, and possibly skew your own game capture sources. If you have trouble with any of this, contact Elias immediately and he will walk you through it.
* Use the existing Zelda Universe profile you have set up to stream on ZU normally.

### Setup
1) Under Scene Collections, select `Import` and select the downloaded `ZUthon_2018.json` file. After a moment, go back into Scene Collections and select `ZUthon 2018`.

Optional:
* Delete any scenes that your streaming location will not be using. For example, The Twilight Realm would delete al scenes except for `Returning Shortly View`, `Host View`, and `Widescreen View` since they are only streaming Hyrule Warriors, which is a widescreen game.
* For each game view you have left, delete any overlays for games you will not be playing. For example, The Twilight Realm would go into `Widescreen View` and delete `BotW P1 Overlay`, `BotW P2 Overlay`, `TWW Overlay`, & `TP Overlay`.
While this step is not required, it will reduce OBS clutter to make it more clear what you're responsible for.

2) In any scene, double click the `Global Overlay` source. Change the file path there to the path where you downloaded `global.html`. Click OK, and information should begin to display.

3) In every scene, double click all other sources that end in `Overlay` and change the file path to where you downloaded `layout.html`. Click OK, and the layouts should appear.
* You may see some overlays that have `P1` or `P2` in the middle. These games have more then one player assigned to them and can be used to seamlessly transition to a new player for the game in studio mode by changing the `#host-one` value in the Custom CSS.
* The Next Game information in the layout will have to be manually maintained by you in order to retain its accuracy. This can be done by changing the `#next-game` value in Custom CSS as well, and should be done ahead of time in studio mode to make it a seamless transition.

4) In every scene where you see a `[Placeholder]` audio source, do the following:
* For `Microphone Audio`, add a new `Audio Input Capture` and select your microphone. Click OK.
* For `Desktop Audio`, add a new `Audio Output Capture` and select leave the default value. Click OK.
* For `Radio Hyrule Audio`, add a new `VLC Video Source` and click the `+` to the side, select `Add Path/URL`, and put `http://listen.radiohyrule.com:8000/listen` for the value. Click OK.
Once a scene has its actual audio sources, you may delete the `[Placeholder]` sources in that scene.

5) In every scene that contains `[Alignment] Camera Capture`, add a new `Video Capture Device` source, select your webcam, use a preset resolution of `1280x720`, and click OK. Reorder your sources so that your new camera capture source is below the overlay sources. Right click `[Alignment] Camera Capture` and go to `Transform > Copy Transform`, single click your new camera capture source, right click it and go to `Transform > Paste Transform`. This will align your camera to the corresponding space in the layout. Once it is aligned, you may delete the `[Alignment] Camera Capture` source in that scene.
* If it does not, or your webcam does not support a 1280x720 resolution, you may have to manually size and place that camera into the layout.

6) In every game view scene, add in your game capture similar to how you do so for your regular ZU streams. If you have trouble with this, contact Elias.

## Broadcast Procedure
1) Once you are ready to go live, coordinate with the location streaming before you to make sure that they are ready to hand it off. Once they are, they will cut their stream. Wait five or so seconds, and then go live with the `Returning Shortly View`.

2) Once you are able to verify that your stream is being broadcast, transition to the `Host View` to introduce your segment and game for the marathon. once you are done with that, transition to your next game view and begin playing.
* While streaming for the marathon, 100% of the calls to action should be about donations to the charity. Do not try to get people to subscribe to the channel or give bits. Personal plugs are situationally appropriate. Location specific donation incentives are also encouraged.

3) Immediately after you begin playing your game, change the `#next-game` value in the `Host View` `Host Overlay` to the game that's next in the schedule after yours.
* If at any time you have to take a break during your slot, transition to the the `Returning Shortly View` and then transition back to your game view.

4) Once you are done with your game, transition back the `Host View` and wait until you get confirmation that the next location is ready to stream. While this is happening, edit the `Returning Shortly View` `Returning Shortly Overlay` `#next-game` value to the next game on the schedule.

5) Once you have definite confirmation that the next location is ready to take over, transition to the `Returning Shortly View` for a few seconds, and then cut the stream.
* If you have another slot later on int he schedule, before now and then update the `#next-game` values in all the appropriate overlay sources to reflect what the next game will be in at that time in the schedule.
