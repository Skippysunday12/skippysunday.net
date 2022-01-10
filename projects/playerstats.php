<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Webpage for Skippysunday">
    <link rel="icon" href="/images/icon.png">
    <link rel="stylesheet" href="/styles/master.css">
    <link rel="stylesheet" href="/styles/projects/playerstats.css">
    <link rel="stylesheet" href="/styles/animations.css">
    <script src="/scripts/navlinks.js" charset="utf-8"></script>
    <title>Project | Playerstats</title>
  </head>
  <body class="fadein">
    <h1 id="header">Skippysunday.net</h1>
    <div class="content">
      <h2>Description: This plugin is what I consider to be when I started on real
      projects. This was fully comleted, and was not some small experiment. In
      face, right now it has <?php echo json_decode(file_get_contents('http://api.spiget.org/v2/resources/85774'))->downloads;?>
      downloads on <a href="https://www.spigotmc.org/resources/playerstats.85774/" target="_blank" id="spigot">spigot</a>!
      It allows for server administrators to see information not typically readily
      available: inventory information, currently applied potion effects, and much more.</h2>
      <h2><br/>Technical details: This project was fairly simple in its idea, but
      I did manage to achieve lots of complexity in later updates. One of the first
      big things with this project was connecting to a MySQL Database. This option
      allowed users to have an organized way of seeing data outside of the game.
      It also paved the way for another major feature: Discord Integration. The
      integration was never super complex, just a simple bot that used data from
      the MySQL Database and serve it to users.</h2>
      <h2>However, the biggest change for me was the use of version control. This
      did not come later into the project, but it completly changed everything.
      I was manually backing up my whole project because of computer troubles, and
      keeping track of everything was a pain. After learning about Git for about a
      week, I decided to try it out, and now I can't <em>not</em> use it! Plus, Git
      is one of the most common used systems, and paired with Github, it is
      one of the most consistent tools found across major brands in the industry,
      and small passion developers like myself.</h2>
      <h2 id="last">The last major part of this project was the use of the Maven
      build system. It helps to manage dependencies, and package jar archive files for export.
      This, like Git, came much later in the project, and only after I started to
      need it. Also like Git, it took a while to warm up to it, but now it would be hard to live
      without. It is also commonly found in many projects in a wide variety of development
      environments.</h2>
      <img src="/images/ps.png" alt="PlayerStats Banner" height="125" width="500" id="psbanner"></img>
      <img src="/images/git.png" alt="Git logo" width="500" height="250" id="gitlogo">
      <img src="/images/maven.png" alt="Maven logo" width="500" height="165" id="mavenlogo">
    </div>
  </body>
</html>
