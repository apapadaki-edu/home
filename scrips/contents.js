/*Messaging Application
ina
A simple messaging application. Makes it easy to manage messages sent from different applications from one user interface.  When provided with the title, e-mail or phone number, the user can choose to either send an email or a message. The corresponding application opens with the fields of a new e-mail or message filled out, depending on their choice.  
iwk
Once the app is opened, the user is presented with a simple UI, that probes them for an email address or a phone number. If an email address is provided, an additional field appears for the email’s subject. Lastly, there is a text field for filling in the email’s or message’s body. 
This field for the email address and phone number is checked for the validity of its content. For instance, whether the email conforms with the standards published by official authorities/ organizations. This kind of validation can prevent simple mistakes with the correct form of email addresses (i.e., two @) or the number of digits in a phone number. In case of such mistakes, a message appears to inform the user as appropriate.
After completing all fields, can press one of the available buttons to open the corresponding application. For instance, if the user chooses to send an email, a small menu pops up with all the available applications for sending emails, installed on the user’s phone listed. Then the user can pick which one to choose. 
tl
Developing this application had the purpose of getting us accustomed to starting activities using URIs. Those activities help communicate with different applications and not new child activities. Furthermore, coding this app familiarized us with building UI’s with XML coding. 
Unfortunately, it was not tested for messaging applications besides the one pre-installed. For instance, applications such as Viber, WhatsApp or others. This can be a feature for future development. 
Scientific Calculator
ina
A calculator for computing the factorial, the Fibonacci sequence and the Great Common Divisor of a stream of numbers. The factorial is computed for every number in the sequence. The Fibonacci sequence is generated for each number in the stream and it is up to that number. Lastly, the GCD is computed for the total numbers in the stream. 
iwk
Starting, the UI includes an EditText field for providing the stream of numbers. The numbers must be separated by commas. No other separator is allowed. The numbers can include white spaces in between commas. In case of incorrect input, a toast message pops up to inform the user. 
Next, there are three buttons, one for each mathematical operation. The user can press the buttons at any given time. They can be pressed with the same or different streams, even before the results of previous streams are calculated. 
Lastly, there is a view for presenting the results. The results are displayed in ascending order of the time needed to calculate them. For example, suppose that the user provides a sequence of large numbers before a stream of smaller numbers. The sequence with smaller ones will be displayed first; since it is a heavier task for the computer to calculate.
tl
This application was developed for getting us accustomed to threads. Tasks that take too long to finish need to be completed in a way that does not freeze the UI. As such, threads take the role of doing heavy tasks in the background, while the user can still interact with the application. The UI updates asynchronously. 
There are limitations when it comes to computational resources. For example, the amount of memory a user has, may not be enough for storing large numbers during the calculation process. Such restrictions can crash the application. I have yet to find a way to detect the memory available and therefore, make customizations or inform the user as appropriate. This could be a task for future reference.
Calendar Events
ina
An application for creating, modifying and storing calendar events. The events are displayed on a list in ascending order of the date they take place. The most recent one is displayed at the top. 
iwk
Once opening the application, the user is presented with a list of all the events that haven’t been concluded yet. They are listed from the closest to the furthest one. For each event on the list, the user can see its title, the date of creation and its due date. Along with this information, next to each event, there is a checkbox. The events that are checked can be bulk deleted, by pressing the delete button at the top right side of the screen.
From the main screen, the user has two choices, apart from mass deleting events. The first one is to press the round orange button. This allows the user to create a new event. The other one is to click on a note from the list to modify its information.
For the new event, a new screen opens by pressing the ‘+’ button. This screen contains a form for filling in the new event’s information. That information includes; its title, the date it takes place and a description. The description is optional, whereas the due date must be in the format indicated by the placeholder. The same form appears for modifying an already existing event from the list. However, the fields contain the event’s information, as was last stored.
Once the form is filled out, the event can be saved, in case it already exists deleted or any changes canceled. After any one of the previously mentioned actions, the user is redirected to the main screen.
tl
The goal, while developing this application, was to learn how to interact with a database and how to create child activities. The database used; was one created locally. An additional learning result was the serialization of objects of custom classes. 
As mentioned in the previous section, the due date provided for an event must be in a specific format. This is not user-friendly, neither visually nor functionally. Maybe a calendar widget could be useful for this purpose. Finally, grouping the events weekly or monthly could assist in organizing them more efficiently. 




!! a:
STYLE_LAYERS = [
    ('block1_conv1', 0.2),
    ('block2_conv1', 0.4),
    ('block3_conv1', 0.4)]   
content-img: pouri.jpg
style-img: a_e2.jpg

!! m: 
STYLE_LAYERS = [
    ('block1_conv1', 0.4),
    ('block2_conv1', 0.4),
    ('block3_conv1', 0.2)
]
content-img: dock.jpg
style-img: square4.jpeg
gama: 0.08
Spring's spring -> make it swirly
*/

ms = '<p>This is a messaging application that makes it easier for the user to manage the types of\
 messages they wish to send, all from one UI. Those messages include either emails or phone messages (SMS).\
</p>\
<button class="expand">\
<span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
<svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
</span><p>Interworkings</p>\
<hr></button>\
<div class="section-contents"><p>The user is presented with a simple UI that probes them for an email address or a phone\
 number. This field is checked for the validity of its content. This can prevent simple mistakes,\
  like the correct form of the email address, or the number of digits required in a phone\
   number, saving time for the user. A pop-up message informs the user in case of a mistake. In\
    the case of emails, if an email address is detected, there appears a new field for providing\
     the email\’s subject. Finally, a simple text field is included for the message\’s body.\
</p>\
<p> There are three buttons at the end of the UI, one for opening the user\'s messaging app,\
 one for the email application and the third one, for clearing the text field containing the\
  message\’s body. After the message\’s information are all filled in and depending on the type\
   of message the user wishes to send, the appropriate application opens with its fields already filled in.\
</p></div>\
<button class="expand">\
<span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
<svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
</span><p>Technical/Limitations</p>\
<hr></button>\
<p class="section-contents">The buttons start activities with intents that call the user to open the appropriate\
 applications for each messaging app. A message\'s contents are sent to the messaging app\
  selected through the intent. For now, messages are only for SMS apps, it would be useful to\
   include others like for example, messenger. For emails, the validation conforms with OWASP\ Foundation\’s standard. \
</p>'

calc = '<p>Application for scientific calculations of the functorial, the Fibonacci sequence, \
up to a number and the most common divisor of a stream of numbers. </p>\
<button class="expand">\
<span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
<svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
</span><p>Interworkings</p>\
<hr></button>\
<p class="section-contents">The UI includes an EditText view in which the user provides the numbers separated with commas. \
A check is run for the proper format of the stream of numbers. If it is not a stream of numbers separated by a comma, \
a toast message is presented to notify the user. There are three buttons, one for each mathematical operation. \
The calculation results are shown as blocks in a text area field. </p>\
<button class="expand">\
<span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
<svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
</span><p>Technical/Limitations</p>\
<hr></button>\
<p class="section-contents"> The purpose of this application at the educational level was to learn to work with threads. \
These calculations are ideal for this purpose since they are computationally expensive for large numbers \
and can crash or freeze the UI if not handled in the background. Finally, the application detects the system\’s \
language and presents the corresponding keyboard layout.</p>'

ca  = '<p>An application that allows the user to create, modify and store calendar events. The events are displayed on a \
list based on their due date; the most resent one appears at the top. Due to its simplicity, one can organize events more efficiently. </p> \
<button class="expand">\
<span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
<svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
</span><p>Interworkings</p>\
<hr></button>\
<div class="section-contents"><p>The start screen displays all calendar events that are not past due; have not yet happened. \
The events are ordered by the date the event happens, starting with the most recent one.\
For each event on the list, its title, the date of creation and the due date are included. Additionally, \
next to each event there is a check box for bulk deleting events. Finally, a button with the \'+\' sign is used to add a new event. </p>\
<p>A new form appears to the user, in case they wish to add a new event, by pressing the \‘+\’ sign button or to update an already added event, \
by pressing on an event. In the form the user can fill in the event\'s information. This information include its title, a description and the date of the event.</p>\
<p>The form includes three buttons. One button is to save or update an event, one to delete it and finally, one to cancel the changes. \
After each operation, the user is directed back to the main screen. Once a new event is added or updated, the event list on the main screen \
is also updated to include the newly created event or respectively, to display the altered information of the updated event. </p></div>\
<button class="expand">\
<span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
<svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
</span><p>Technical/Limitations</p>\
<hr></button>\
<p class="section-contents"> Events that are past due are still stored in the database, however, they are not displayed on the main screen. Additionally, \
all events are stored in a local relational database, so there is no need for a remote connection. The event list and the \
form consist two separate activities with the one first being the applications main activity and the second a child activity of the main.</p>'

ph = '<p>An application for taking photos, storing them, adding location information and a description.</p>\
<button class="expand">\
<span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
<svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
</span><p>Interworkings</p>\
<hr></button>\
<div class="section-contents"><p>The main screen of the application displays the thumbnails of all photos taken, using the application. \
A button is included for taking new photos. Once the new button is pressed, the native camera app opens for the user to use.\
After a photo is taken the user returns on the main screen with the newly added photo shown in the gallery. Along with the photo, \
there are stored the date and time of creation and the location information.</p>\
<p>The user can also include a description for a photograph. Once clicking on a photo thumbnail on the main screen, \
a new screen appears with the photo\’s information. These pieces of information include a larger version of the photograph, the location where it was taken, \
the date and time and a field for the description. The description can be modified and stored anew.</p></div>\
<button class="expand">\
<span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
<svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
</span><p>Technical/Limitations</p>\
<hr></button>\
<p class="section-contents"> Location information is stored as retrieved from the GeoCoder, as latitude and longitude pairs. The date and time \
are stored as recorded from the system, without any formatting. After the media is taken, they are stored locally, using a content provider. \
The reason for creating a content provider was to use it along the map application developed later. Since through that \
application the user can add information along with pins for places of interest, they could also include images for those places.\
Some learning objectives were to ask and grand permissions, to use the external storage for an application and lastly, to manipulate media.</p>'
