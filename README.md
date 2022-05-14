# Site Notes - CS50x Final Project (Chrome Extension)
#### https://youtu.be/i-ga_sDwyFo
#### Start saving your notes right away, always within reach right in the chrome browser. 
##### Site Notes stores you notes for unique websites you visit so you can save your spur of the moment thought within seconds. To create a chrome extension i used;
1. **manifest.json**
2. **CSS with Bootstrap framework**
3. **HTML**
4. **Vanilla JavaScript**

Without a **manifest.json** file your extension will not work. Most importantly is to choose the right version, recently manifest 
different security measures and key-words, which means it will be harder to get help for your current manifest version 3 extension. Although
some things may be harder to find, manifest version 3 is more secure and has the same features as the older installation.

Using **CSS with Bootstrap framework** is an easier way to create a smooth and good looking website, or in this instance a chrome extension. 
Being one of the most popular frameworks out there comes with a bunch of prebuilt classes which can be used to style your application, and it
was used in Site Notes for the buttons, icons and more.

The **HTML** makes use of the classes of Bootstrap to divide up the different areas. Elements have different classes and elements which are then used
in the external CSS and JavaScript files. After a few fixes the HTML from this extension will be valid in different HTML validators, which means
it follows best practise.

I choose to use **Vanilla JavaScript** to make this extensions to get used to the JavaScript syntax, which was easy as it conforms to many of the same
principles like C altough with more variety since it's used to make the extension dynamic and not just a static poput.

##### Some functions of the chrome extension includes;
- **Save notes**
- **Delete notes**
- **Unique site notes**
- **Local storage**
- **Dark mode**

For every site you visit the URL is grabbed and all the unnecessary filepaths are removed, after which you current website you are on is displayed on top
of the extension. The website displayed is the key used to store your notes to local storage using chromes API, which means when you close your notes and later 
return your notes are safe and secure after clicking the save button. To spare your eyes turn on dark mode, which will turn the background to a darker shade
and your preferance will be recorded, which means when restarting the Site Notes extension your light or dark mode preferance will still be there.

##### Design choises
The color of the buttons had to fit both dark and light mode, since i only wanted to change the background during dark mode, since the one second animation
that plays when you press save or delete should be universal. When deleting it flashes red for a second, and when saving a lighter blue appears, which fits
great with both light and dark backgrounds. Exactly how the light and dark mode came to be was because i wanted to add something a little bit different than the 
regular white/grey backgrounds, which is why they are slightly different with a light blue and a darker red.
