<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="All about me, Skippysunday.">
    <link rel="icon" href="images/icon.png">
    <link rel="stylesheet" href="styles/master.css">
    <link rel="stylesheet" href="styles/about.css">
    <link rel="stylesheet" href="styles/animations.css">
    <script type="text/javascript" src="scripts/footer.js"></script>
    <title>About me</title>
  </head>
  <body>
    <div class="header fadein">
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
      <h3 class="bounce" id="start" onclick="window.scrollTo({top: window.innerHeight, behavior: 'smooth'});"> Click (or scroll) to Start </h3>
    </div>
    <div class="beginnings fadeinwrapper">
      <h1 id="beginningheader">Beginnings</h1>
      <p id="beginningtext">It all started with Raspberry Pi's. This small, cheap, and fast
       computer provided the perfect start to a beginner like me. Its numerous guides,
       tutorials, and help centers allowed me to quickly and easily start learning.
       The language mainly used with Raspberry Pi's is python, and in my opinion,
       python's syntax is a little confusing compared to a language like Java, so
       it was a bit of a rough start. However, I kept going, and so much did I learn that I started
       a notebook to keep track of it all. A full pdf version can be found
       <a href="https://drive.google.com/file/d/1avOyX9oEax2pSzd1X-gRS4OoxkpwS618/view?usp=sharing" target="_blank" style="color: var(--white);">here</a>.
       Keep in mind these are the thoughts, handwriting, and spelling mistakes of a fourth grader.</p>
      <a href="https://www.raspberrypi.org" target="_blank" id="rpi"><img src="images/rpi_logo.png" alt="Raspberry pi logo" width="247" height="310"/></a>
      <h3 class="bounce" id="begcontinue" onclick="window.scrollTo({top: window.innerHeight * 2, behavior: 'smooth'});">Click or scroll to continue</h3>
    </div>
    <div class="computer fadeinwrapper">
      <h1 id="computerheader">First computers</h1>
      <p id="computertext">I got my first real computer when I turned 12. Before
      that, I had a chromebook for a couple of years, but the limitations of the
      chromebook OS didn't allow for much beyond online programming classes like
      Kahn Academy. This first computer, a Lenovo Ideapad, enabled me to install
      real text editors and IDEs (Integrated Development Environment) such as VS
      Code, a popular IDE used not only for amatuers, but also professionals.
      From there, I started experimenting with arduinos, and poked around a bit in HTML.</p>
      <img src="images/vscode.png" alt="Visual Studio Code Icon" width="350" height="350" id="vscode">
      <h3 class="bounce" id="compcontinue" onclick="window.scrollTo({top: window.innerHeight * 3, behavior: 'smooth'});">Click or scroll to continue</h3>
    </div>
    <div class="java fadeinwrapper">
      <h1 id="javaheader">Java</h1>
      <p id="javatext">Java has been my favorite language so far. It has also been
      the language with which I started programming fully fleshed out projects, rather
      than half baked, incomplete ideas. These first projects were built as modifications
      (or mods) of the game Minecraft, through a software called Spigot. Spigot was
      a perfect way to start full projects, because it provided a pre-existing project
      (the game) to add to, rather than having to do everything myself. I started
      highschool computer science classes my freshmen year, but the introductory
      course was slow for me, so I went off on my own to learn, hence these
      spigot projects.</p>
      <a href="https://spigotmc.org" target="_blank"><img src="images/spigot.png" alt="Unofficial Java Logo" width="358" height="254" id="spigot"/></a>
      <a href="projects.html" class="bounce" id="projpage"><strong>Click to go to projects page</strong></a>
    </div>
    <custom-footer date="12/30/2021"/>
    <script src="scripts/fadeonscroll.js" charset="utf-8"></script>
    <script type="text/javascript" src="scripts/startbounce.js"></script>
  </body>
</html>
