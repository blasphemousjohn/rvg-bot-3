# RVG-BOT-3
Node.js version of the RVG bot, and introduction to GitHub.

# Working with Branches...
**ENSURE you are in the Working branch before making any changes...**

There are two 'branches' or versions of the code in this repository.  One branch is the master, the other is the working branch.  We will, for the most part, use the working branch to create / upload new files, and then create a pull request to bring these files into the master.  The 'master' branch is basically our source for all our files... an easy way to think of it is **download** from the master, **upload** to the working.  

# How to get the code? 
1. The simplest way to get the code is to click the green 'Clone or download' button on on the top right corner of the 'master' branch GitHub page, then download the code entirely.  
![Download the Code](https://raw.githubusercontent.com/blasphemousjohn/rvg-bot-3/master/Tutorial-Files/download.JPG)
2. You can now make any changes to any part of the code you need. 

# Uploading the code
1. After you have made changes to the source code, you can upload the files to the **Working** branch (ensure any files existing in the repo have the same exact name as when you downloaded them, eg. don't change file names!).    
![Working](https://raw.githubusercontent.com/blasphemousjohn/rvg-bot-3/master/Tutorial-Files/working.JPG)
2. Once finished adding or modifying files in the 'Working' file, click the 'New Pull Request' button.
![New PR](https://raw.githubusercontent.com/blasphemousjohn/rvg-bot-3/master/Tutorial-Files/submitPR.JPG)
3. Your PR will be submitted for review.  By default, this repo requires 1 peer review before acceptance into master.

# Heroku Deployment
Create your app on heroku and give it a name.  Link it to the GitHub repository of your choice (I've linked mine here), and set it to automatically deploy (this allows it to deploy everytime master is updated). 

1. Ensure you have a Procfile as I have above, this tells Heroku what to deploy the app as!  If you don't have one, create it!
2. Heroku doesn't need any .env dependencies as I've left them out of the code here.  It instead has it's own solution which is quite helpful, called Config Variables!  This can be found in your apps settings on heroku --> config vars. See the code for more information as I've added a readme on the creation of this.
![Config Vars](https://raw.githubusercontent.com/blasphemousjohn/rvg-bot-3/master/Tutorial-Files/key_goes_here.JPG)

# Tutorial links below: 
https://help.github.com/en/articles/about-pull-requests

https://help.github.com/en/articles/about-collaborative-development-models -- NOTE: We are using the 'Shared' development method.

https://www.codementor.io/garethdwyer/building-a-discord-bot-with-node-js-and-repl-it-mm46r1u8y

https://thomlom.dev/create-a-discord-bot-under-15-minutes/

https://devcenter.heroku.com/articles/config-vars

 -- Note that this tutorial isn't exactly what we will do, and we won't be hosting it off repl.it due to privacy reasons.
