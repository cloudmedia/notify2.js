# notify2.js
## Notify2.js is a javascript class and library that allows you to quickly implement a notifcation bar at the bottom of the screen.

### Some of the features include:

- Four classes: error, success, info, and warn, each with different colors, icons and sounds
- UI sounds play, depending on class
- Auto-hide toggle via class metrhod
- Set auto-hide delay via class method
- Confirm function allows user to select &quot;Yes&quot; or &quot;No&quot;
- Custom HTML can be inputted as notifcation message
- Fully mobile-responsive CSS

Notify2.js requires only jquery to work. To use, simply import notify2.js and notify2.css into your web site.

Notify2.js also works with Sounds.js as an optional plugin. Simply load Sounds.js into your site and set `useSounds` to `true`.

#### Example:
```
var notify = new Notify2("Some kind of error occurred!", "error");
notify.notify();
```

#### Confirm dialog example:
```
var confirm = new Notify2("Are you sure you want to blow up the Earth?", "info");
confirm.doConfirm("yesButtonCallback()", "noButtonCallback()");
confirm.notify();
```

### Project Web Page:
https://code.cloudulus.media/project/100/notify.js
