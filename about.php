<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="All about me, Skippysunday.">
    <link rel="icon" href="images/icon.png">
    <link rel="stylesheet" href="styles/master.css">
    <link rel="stylesheet" href="styles/about.css">
    <title>About me</title>
  </head>
  <body>
    <img src="images/icon.png" alt="Icon" width="600" height="500" id="iconimage">
    <h1 id="aboutme">About me</h1>
    <p class="abouttext" id="about1">Hi, I'm Skippysunday. I'm a <?php
    $birth = new DateTime("Aug 26 2005");
    $now = new DateTime("NOW");//Wooo php!
    echo $birth->diff($now)->format("%y");?> year old high school developer in Texas.
    I code projects in my free time, and I have been doing it for quite a while now.
    <br/><br/>I was first inspired by a summer camp when I was 9. We used Raspberry Pi's
    to program small "experiments" in the Raspbian edition of Minecraft. From here, the
    spiral of curiosity began.</p>
    <h3 id="start" onclick="window.scrollTo({top: window.innerHeight, behavior: 'smooth'}); console.log(window.innerHeight);">V Click to Start V</h3>
    <div class="beginnings">
      <p>hello</p>
    </div>
  </body>
</html>
